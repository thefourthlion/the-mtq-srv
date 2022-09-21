const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide name"],
    },
    companyName: {
      type: String,
      require: [true, "Please provide companyName"],
    },
    email: {
      type: String,
      require: [true, "Please provide email"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide phoneNumber"],
    },
    currentWebsite: {
      type: String,
      required: [true, "Please provide currentWebsite"],
    },
    information: {
      type: String,
      required: [true, "Please provide information"],
    },
    formType: {
      type: String,
      required: [true, "Please provide formType"],
    },
    responded: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
      default: "",
    },
    quote: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", PostSchema);

module.exports = Posts;
