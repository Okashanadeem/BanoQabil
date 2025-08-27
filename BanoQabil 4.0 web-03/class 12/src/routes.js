// src/routes.js
const express = require("express");
const router = express.Router();
const ctrl = require("./controllers");

// 1. Top 5 cities by ride count
router.get("/top-cities", ctrl.topCities);

// 2. Monthly revenue (last N months, default 6)
router.get("/monthly-revenue", ctrl.monthlyRevenue);

// 3. Join rides with captains (attach captainName to rides)
router.get("/rides-with-captain", ctrl.ridesWithCaptain);

// 4. Average fare per stop (deliveries)
router.get("/avg-fare-per-stop", ctrl.avgFarePerStop);

module.exports = router;
