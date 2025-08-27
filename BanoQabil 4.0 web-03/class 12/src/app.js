// src/app.js
const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./db");
const routes = require("./routes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => res.send("Aggregation exercises backend is running"));

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connect();
    app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Startup error:", err);
    process.exit(1);
  }
})();
