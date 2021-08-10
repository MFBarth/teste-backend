/* eslint-disable no-param-reassign */
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        active: DataTypes.BOOLEAN
      },
      {
        sequelize: connection,
      },
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'user_id', as: 'movies' });
    this.hasMany(models.User, { foreignKey: 'user_id', as: 'votes' });
  }
}

module.exports = User;
