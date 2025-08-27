// src/db.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/agg_exercises";
const client = new MongoClient(MONGO_URI, {});

let dbInstance = null;

async function connect() {
  if (!dbInstance) {
    await client.connect();
    const dbName = MONGO_URI.includes("/") ? MONGO_URI.split("/").pop().split("?")[0] : "agg_exercises";
    dbInstance = client.db(dbName);
    console.log("Connected to MongoDB:", dbName);
  }
  return dbInstance;
}

module.exports = { connect, client };
