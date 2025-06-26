const mongoose = require("mongoose");

const landingPageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  brandName: {
    type: String,
    required: [true, "Please enter the brand name."],
  },

  targetAudience: String,
  industry: String,
  serviceDescription: String,
  painPoints: [String],
  solutionPromise: String,

  tone: String,
  voiceExamples: [String],
  primaryColor: String,
  font: String,
  logoUrl: String,

  goal: String,
  ctaType: String,
  urgencyTone: { type: Boolean, default: false },
  conversionPsychology: [String],

  slug: { type: String, unique: true },
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});


const LandingPage = mongoose.model("LandingPage", landingPageSchema);
module.exports = LandingPage;
