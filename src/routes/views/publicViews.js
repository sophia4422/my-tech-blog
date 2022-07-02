const renderLoginPage = (req, res) => {
  return res.send("renderLoginPage");
};
const renderSignUpPage = (req, res) => {
  return res.send("renderSignUpPage");
};
const renderHomePage = (req, res) => {
  return res.send("renderHomePage");
};

module.exports = {
  renderLoginPage,
  renderSignUpPage,
  renderHomePage,
};
