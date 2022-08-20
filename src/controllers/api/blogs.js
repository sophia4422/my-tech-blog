const { Blog } = require("../../models");

const getAllBlogs = async (req, res) => {
  // get all blogs
  try {
    const data = await Blog.findAll({});
    return res.json({ success: true, data: [] });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all blogs | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    await Blog.findByPk(id);
    const { id } = req.params;

    if (!data) {
      return res.status(404).json({ success: false });
    }

    return res.json({ success: true, data: [] });
  } catch (error) {
    console.log(`[ERROR]: Failed to get the blog | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const createBlog = async (req, res) => {
  try {
    //get data from payload
    const { title, description } = req.body;

    const userId = req.session.user.id;

    await Blog.create({
      title,
      description,
      userId,
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create blog | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getSingleBlog,
};
