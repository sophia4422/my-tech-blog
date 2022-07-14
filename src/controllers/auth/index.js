// const { User } = require("../../models");

// const login = async (req, res) => {
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
// };

// const signup = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     const user = await User.findOne({ where: { email } });

//     if (user) {
//       console.log(
//         `[ERROR]: Failed to create user | Email address of ${email} already exists`
//       );
//       return res.status(400).json({ error: "Failed to create user" });
//     }

//     const data = await User.create({
//       firstName,
//       Lastname,
//       email,
//       password,
//     });

//     return res.json({ data: "Successfully created user" });
// } catch (error) {
//     console.log(`[ERROR]: Failed to create user`);

//     return res.status(500).json({ error: failed to create user});
// }

//   } catch (error) {
//     console.log(`[ERROR]: Failed to login | ${error.message}`);
//   }
// };

// const logout = async (req, res) => {};

// module.exports = {
//   login,
//   signup,
//   logout,
// };
