const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("videogame", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
