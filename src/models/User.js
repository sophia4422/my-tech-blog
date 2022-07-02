const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

class User extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
};

const options = {};

User.init(schema, options);

module.exports = User;
