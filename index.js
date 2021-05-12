const Joi = require("joi");
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const courses = require("./routes/courses");
const home = require("./routes/home");

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/api/courses", courses);
app.use("/", home);
app.use(logger);

// PORT

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
