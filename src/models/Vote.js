/* eslint-disable no-param-reassign */
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Vote extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        vote: DataTypes.INTEGER,
        user_id: DataTypes.UUID,
        movie_id: DataTypes.UUID,
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
    this.belongsTo(models.User, { foreignKey: 'movie_id', as: 'movies' });
  }
}

module.exports = Vote;
