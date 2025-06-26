const mongoose = require("mongoose");

const pageSectionSchema = new mongoose.Schema({
  pageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LandingPage",
    required: [true, "pageId is required!"],
  },

  sectionType: {
    type: String,
    required: [true, "Page section type is required!"],
    enum: [
      "hero",
      "features",
      "cta",
      "testimonials",
      "faq",
      "about",
      "comparison",
      "gallery",
      "pricing",
      "footer",
      "custom",
    ],
  },
  layout: {
    type: String,
    default: "default", // e.g. 'split-right-image'
  },
  variant: {
    type: String,
    default: "v1",
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // Flexible structure
    required: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  designOptions: {
    align: { type: String, enum: ["left", "center", "right"], default: "left" },
    backgroundColor: { type: String, default: "#ffffff" },
    imagePosition: {
      type: String,
      enum: ["left", "right", "top", "none"],
      default: "right",
    },
    padding: { type: String, default: "py-12 px-6" },
  },
  order: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

pageSectionSchema.index({ pageId: 1, order: 1 });

const PageSection = mongoose.model("PageSection", pageSectionSchema);
module.exports = PageSection;
