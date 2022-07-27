const path = require("path");

const renderHomePage = (req, res) => {
  return res.render("home", {
    isLoggedIn: true,
  });
};

const renderLoginPage = (req, res) => {
  return res.render("login");
};

const renderSignUpPage = (req, res) => {
  return res.render("signup");
};

const renderDashboardPage = (req, res) => {
  return res.render("dashboard");
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
