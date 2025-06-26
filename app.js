const epxress = require("express");
const morgan = require("morgan");
const app = epxress();

// ROUTES
const landingPageRoute = require('./routes/landingPageRoute');

// CONFIGURATION FILE
require("dotenv").config();

// ENV: DEV
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// TOP-LEVEL-MIDDLEWARE
app.use(epxress.json({ limit: "10kb" }));

// ALL ROUTES
app.use("/api/v1/landing-pages", landingPageRoute);

module.exports = app;
