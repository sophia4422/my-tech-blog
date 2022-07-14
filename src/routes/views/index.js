const { Router } = require("express");

const {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderDashboardPage,
} = require("../../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignUpPage);
router.get("/dashboard", renderDashboardPage);

module.exports = router;
