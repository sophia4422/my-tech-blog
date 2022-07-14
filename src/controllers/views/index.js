const path = require("path");

const renderHomePage = (re, res) => {
  const filePath = path.join(__dirname, "../../../public/publicHome.html");
  return res.sendFile(filePath);
};

const renderLoginPage = (re, res) => {
  const filePath = path.join(__dirname, "../../../public/login.html");
  return res.sendFile(filePath);
};

module.exports = { renderHomePage, renderLoginPage };
