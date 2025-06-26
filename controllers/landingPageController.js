const LandingPage = require("./../models/landingPageModel");
const PageSection = require("./../models/pageSectionModel");

exports.createLandingPage = async (req, res) => {
  try {
    const landingPage = new LandingPage({ ...req.body, userId: req.user._id });
    await landingPage.save();
    res.status(201).json({
      status: "success",
      data: {
        landingPage,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to create Landing Page",
      errorMessage: err.message,
    });
  }
};

exports.getLandingPage = async (req, res) => {
  try {
    const pageId = req.params.id;
    const landingPage = await LandingPage.findById(pageId);
    const pageSection = await PageSection.find({ pageId }).sort({
      createdAt: -1,
    });

    if (!landingPage) {
      return res.status(404).json({
        status: "Fail",
        message: "Landing Page not found!",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        landingPage,
        pageSection,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "failed to fetch the landing page!",
      errorMessage: err.message,
    });
  }
};

exports.getAllLandingPages = async (req, res) => {
  try {
    // const allLandingPages = await LandingPage.find({
    //   userId: req.user._id,
    // }).sort({ createdAt: -1 });

    const allLandingPages = await LandingPage.find();

    res.status(200).json({
      status: "success",
      data: {
        allLandingPages,
      },
    });
  } catch {
    res.status(500).json({
      status: "fail",
      message: "failed to load all landing pages!",
      errorMessage: err.message,
    });
  }
};

exports.deleteLandingPage = async (req, res) => {
  try {
    await LandingPage.findByIdAndDelete(req.params.id);
    await PageSection.deleteMany({ pageId: req.params.id });
    res.status(204).json({
      status: "success",
      message: "Landing Page successfully deleted.",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "failed to delete a landing pages!",
      errorMessage: err.message,
    });
  }
};
