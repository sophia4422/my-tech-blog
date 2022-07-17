const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/publicHome.html");
  return res.sendFile(filePath);
};

const renderLoginPage = (req, res) => {
  return res.render("login");
};

const renderSignUpPage = (req, res) => {
  return res.render("signup");
};

const renderDashboardPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/dashboard.html");
  return res.sendFile(filePath);
};

const renderCreateBlogPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/createBlog.html");
  return res.sendFile(filePath);
};

const renderBlogPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/singleBlog.html");
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderDashboardPage,
  renderCreateBlogPage,
  renderBlogPage,
};
