const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/publicHome.html");
  return res.sendFile(filePath);
};

const renderLoginPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/login.html");
  return res.sendFile(filePath);
};

const renderSignUpPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/signup.html");
  return res.sendFile(filePath);
};

const renderDashboardPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/dashboard.html");
  return res.sendFile(filePath);
};

const renderCreateBlogPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/createBlog.html");
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderDashboardPage,
  renderCreateBlogPage,
};
