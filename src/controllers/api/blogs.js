const getAllBlogs = (req, res) => {
  // get all blogs
  return res.json({ success: true, data: [] });
};

const createBlog = (req, res) => {
  return res.json({ success: true });
};

const getSingleBlog = (req, res) => {
  return res.json({ success: true, data: {} });
};

module.exports = {
  getAllBlogs,
  createBlog,
  getSingleBlog,
};
