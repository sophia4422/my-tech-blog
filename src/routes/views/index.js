const { Router } = require("express");

const { renderHomePage } = require("../../controllers/views");

const router = Router();

// router.get("/login", renderLoginPage);
// router.get("/signup", renderSignUpPage);
router.get("/", renderHomePage);

module.exports = router;
