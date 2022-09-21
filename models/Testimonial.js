const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide name."],
    },
    companyName: {
      type: String,
      require: [true, "Please provide company name."],
    },
    feedback: {
      type: String,
      require: [true, "Please provide feedback."],
    },
    approved: {
      type: String,
      default: "off",
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Testimonials = mongoose.model("Testimonials", TestimonialSchema);

module.exports = Testimonials;
