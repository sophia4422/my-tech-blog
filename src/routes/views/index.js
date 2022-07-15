const { Router } = require("express");

const {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderDashboardPage,
  renderCreateBlogPage,
  renderBlogPage,
} = require("../../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignUpPage);
router.get("/dashboard", renderDashboardPage);
router.get("/create-blog", renderCreateBlogPage);
router.get("/blogs/:id", renderBlogPage);

module.exports = router;
