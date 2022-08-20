const { Router } = require("express");

const blogs = require("./blogs");
const dashboard = require("./dashboard");

const router = Router();

router.use("/blogs", blogs);
router.use("/dashboard", dashboard);

module.exports = router;
