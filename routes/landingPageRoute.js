const express = require("express");
const router = express.Router();

// LANDING-PAGE-CONTROLLER
const landingPageController = require("./../controllers/landingPageController");

router
  .route("/")
  .get(landingPageController.getAllLandingPages)
  .post(landingPageController.createLandingPage);

router
  .route("/:id")
  .get(landingPageController.getLandingPage)
  .delete(landingPageController.deleteLandingPage);

module.exports = router;
