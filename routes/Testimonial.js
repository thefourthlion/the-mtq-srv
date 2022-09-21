const express = require("express");

const router = express.Router();

const {
  createTestimonial,
  updateTestimonial,
  readTestimonial,
  readTestimonialFromID,
  deleteTestimonial,
} = require("../controllers/Testimonial");

router.route("/post").post(createTestimonial);
router.route("/update/:id").post(updateTestimonial);
router.route("/read").get(readTestimonial);
router.route("/read/:id").get(readTestimonialFromID);
router.route("/delete/:id").delete(deleteTestimonial);

module.exports = router;
