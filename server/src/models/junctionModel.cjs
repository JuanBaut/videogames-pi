const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Junction",
    {
      GamesId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        references: {
          model: "Games",
          key: "id",
        },
      },
      GenreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Genres",
          key: "id",
        },
      },
    },
    { timestamps: false },
  );
};
