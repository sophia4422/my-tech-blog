const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log(
        `[ERROR]: Failed to login | No user found with email: ${email}`
      );
      return res.status(500).json({ success: false });
    }
    const isAuthorised = await user.checkPassword(password);
    if (isAuthorised) {
      req.session.save(() => {
        req.session.isLoggedIn = true;
        req.session.user = user.getUser();
        return res.json({ success: true });
      });
    } else {
      console.log(
        `[ERROR]: Failed to login | Incorrect password for email: ${email}`
      );

      return res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const signup = async (req, res) => {
  //this controller function will receive a payload
  //create a user
  //send a response to say successfully created user

  try {
    ///get user data from payload
    const { firstName, userName, email, password } = req.body;
    //check user exists
    const user = await User.findOne({ where: { email } });

    if (user) {
      console.log(
        `[ERROR]: Failed to create user | Account with email: ${email} already exists`
      );
      return res.status(500).json({ success: false });
    }

    //create user
    const data = await User.create({
      firstName,
      userName,
      email,
      password,
    });

    return res.json({ data: "Successfully created user" });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const logout = async (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.status(204).end();
    });
  } else {
    return res.status(404).end();
  }
};

module.exports = {
  login,
  signup,
  logout,
};
