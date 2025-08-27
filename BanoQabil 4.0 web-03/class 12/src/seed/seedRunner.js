// src/seed/seedRunner.js
// Lightweight seeder that inserts sample rides & captains so you can test the pipelines quickly.

const { connect, client } = require("../db");

async function run() {
  try {
    const db = await connect();

    // sample captains
    const captains = [
      { _id: "capt1", name: "Ali Khan", phone: "+92300-1111111" },
      { _id: "capt2", name: "Sara Ahmed", phone: "+92300-2222222" },
      { _id: "capt3", name: "Omar Rizvi", phone: "+92300-3333333" }
    ];

    // sample rides (mix of deliveries and rides)
    const rides = [
      { _id: "ride1", city: "Karachi", status: "completed", fare: 120, completedAt: new Date("2025-07-01T10:00:00Z"), captainID: "capt1", type: "delivery", deliveryID: "del1", deliveryStops: ["stop1", "stop2"] },
      { _id: "ride2", city: "Lahore", status: "completed", fare: 80, completedAt: new Date("2025-07-02T11:00:00Z"), captainID: "capt2", type: "ride" },
      { _id: "ride3", city: "Karachi", status: "completed", fare: 200, completedAt: new Date("2025-08-01T09:30:00Z"), captainID: "capt1", type: "delivery", deliveryID: "del2", deliveryStops: ["s1","s2","s3"] },
      { _id: "ride4", city: "Islamabad", status: "cancelled", fare: 0, completedAt: new Date("2025-08-03T12:00:00Z"), captainID: "capt3", type: "ride" },
      { _id: "ride5", city: "Karachi", status: "completed", fare: 150, completedAt: new Date("2025-08-15T14:10:00Z"), captainID: "capt2", type: "delivery", deliveryID: "del3", deliveryStops: ["a","b"] }
    ];

    // clear & insert
    await db.collection("captains").deleteMany({});
    await db.collection("rides").deleteMany({});

    await db.collection("captains").insertMany(captains);
    await db.collection("rides").insertMany(rides);

    console.log("Seeded sample captains and rides.");
    await client.close();
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
}

run();
