const express = require("express");

const router = express.Router();

const {
  createPost,
  readPosts,
  deletePost,
  updatePost,
  readPostFromID,
} = require("../controllers/posts");

router.route("/post").post(createPost);
router.route("/update/:id").post(updatePost);
router.route("/read").get(readPosts);
router.route("/read/:id").get(readPostFromID);
router.route("/delete/:id").delete(deletePost);

module.exports = router;
