/* eslint-disable no-param-reassign */
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
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

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

module.exports = User;
