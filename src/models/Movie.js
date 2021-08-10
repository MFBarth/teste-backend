/* eslint-disable no-param-reassign */
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Movie extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: DataTypes.STRING,
        director: DataTypes.STRING,
        gender: DataTypes.STRING,
        actors: DataTypes.ARRAY(DataTypes.STRING),
        user_id: DataTypes.UUID
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
    this.hasMany(models.User, { foreignKey: 'movie_id', as: 'votes' });

  }
}

module.exports = Movie;
