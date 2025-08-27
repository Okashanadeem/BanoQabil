// src/controllers.js
const { ObjectId } = require("mongodb");
const { connect } = require("./db");

// small helper
const intOrDefault = (v, d) => {
  const n = parseInt(v, 10);
  return Number.isNaN(n) ? d : n;
};

module.exports = {
  // 1) Top 5 cities by ride count
  topCities: async (req, res) => {
    try {
      const db = await connect();
      const pipeline = [
        { $group: { _id: "$city", rideCount: { $sum: 1 } } },
        { $sort: { rideCount: -1 } },
        { $limit: 5 },
        { $project: { _id: 0, city: "$_id", rideCount: 1 } }
      ];
      const data = await db.collection("rides").aggregate(pipeline).toArray();
      res.json({ ok: true, data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ ok: false, error: err.message });
    }
  },

  // 2) Monthly revenue for last N months (default 6)
  monthlyRevenue: async (req, res) => {
    try {
      const months = intOrDefault(req.query.months, 6);
      const db = await connect();

      // start = first day of the month (months-1 months ago)
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth() - (months - 1), 1);

      const pipeline = [
        { $match: { status: "completed", completedAt: { $gte: start } } },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m", date: "$completedAt" } },
            monthlyRevenue: { $sum: "$fare" }
          }
        },
        { $sort: { "_id": 1 } },
        { $project: { _id: 0, month: "$_id", monthlyRevenue: 1 } }
      ];

      const data = await db.collection("rides").aggregate(pipeline).toArray();
      res.json({ ok: true, months, data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ ok: false, error: err.message });
    }
  },

  // 3) Join rides with captains and add captainName
  ridesWithCaptain: async (req, res) => {
    try {
      const limit = intOrDefault(req.query.limit, 50);
      const db = await connect();
      const pipeline = [
        // optional match - keep or remove as needed
        // { $match: { status: "completed" } },
        {
          $lookup: {
            from: "captains",
            localField: "captainID",
            foreignField: "_id",
            as: "captainInfo"
          }
        },
        { $unwind: { path: "$captainInfo", preserveNullAndEmptyArrays: true } },
        {
          $project: {
            _id: 1,
            city: 1,
            fare: 1,
            status: 1,
            completedAt: 1,
            captainId: "$captainID",
            captainName: "$captainInfo.name",
            captainPhone: "$captainInfo.phone"
          }
        },
        { $sort: { completedAt: -1 } },
        { $limit: limit }
      ];

      const data = await db.collection("rides").aggregate(pipeline).toArray();
      res.json({ ok: true, count: data.length, data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ ok: false, error: err.message });
    }
  },

  // 4) Average fare per stop (deliveries) — using $size to avoid unwind
  avgFarePerStop: async (req, res) => {
    try {
      const db = await connect();
      const pipeline = [
        { $match: { type: "delivery" } },
        {
          $project: {
            deliveryID: 1,
            fare: 1,
            stopCount: { $size: { $ifNull: ["$deliveryStops", []] } }
          }
        },
        {
          $project: {
            deliveryID: 1,
            fare: 1,
            stopCount: 1,
            avgFarePerStop: {
              $cond: [
                { $gt: ["$stopCount", 0] },
                { $divide: ["$fare", "$stopCount"] },
                null
              ]
            }
          }
        }
      ];

      const data = await db.collection("rides").aggregate(pipeline).toArray();
      res.json({ ok: true, count: data.length, data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ ok: false, error: err.message });
    }
  }
};
