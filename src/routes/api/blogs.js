const { Router } = require("express");
const {
  getAllBlogs,
  createBlog,
  getSingleBlog,
} = require("../../controllers/api/blogs");

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);
router.post("/", createBlog);

module.exports = router;
