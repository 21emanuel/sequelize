const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

class User extends Model {}
User.init(
  {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
