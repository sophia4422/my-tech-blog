const path = require("path");

const { Blog, User } = require("../../models");

const renderHomePage = async (req, res) => {
  const blogsFromDb = await Blog.findAll({
    include: {
      model: User,
      attributes: ["firstName", "userName"],
    },
    attributes: ["id", "title", "description"],
  });

  const blogs = blogsFromDb.map((blog) => {
    return blog.get({ plain: true });
  });

  console.log(blogs);

  return res.render("home", {
    isLoggedIn: req.session.isLoggedIn,
    blogs,
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
  return res.render("createBlog");
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
