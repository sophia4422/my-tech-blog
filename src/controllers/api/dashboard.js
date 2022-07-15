const getDashboard = (req, res) => {
  // get dashboard
  return res.json({
    success: true,
    data: {},
  });
};

module.exports = {
  getDashboard,
};
