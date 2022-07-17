const getDashboard = async (req, res) => {
  // get all blogs
  try {
    //FOR NOW HARD CODE USERID
    const userId = 1;

    const data = await Blog.findAll({ where: { id: userId } });
    return res.json({ success: true, data: [] });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all blogs | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getDashboard,
};
