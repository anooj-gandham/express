const express = require("express");
const app = express();
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const morgan = require("morgan");

if (app.get("env") === "development") {
  app.use(morgan("env"));
  startupDebugger("Morgan enabled...");
}

dbDebugger("Connected to db...");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
