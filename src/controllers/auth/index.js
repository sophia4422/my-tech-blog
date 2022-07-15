const { User } = require("../../models");

const login = async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     const user = await User.findOne({ where: { email } });
  //     if (!user) {
  //       console.log(
  //         `[ERROR]: Failed to login | No user with email address of ${email}`
  //       );
  //       return res.status(401).json({ error: "Failed to login" });
  //     }
  //     const isAuthorised = await user.checkPassword(password);
  //     if (isAuthorised) {
  //       return res.json({ data: "hello" });
  //     } else {
  //       return res.status(401).json({ data: "lol" });
  //     }
  //   } catch (error) {
  //     console.log(`[ERROR]: Failed to login | ${error.message}`);
  //   }
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

const logout = async (req, res) => {};

module.exports = {
  login,
  signup,
  logout,
};
