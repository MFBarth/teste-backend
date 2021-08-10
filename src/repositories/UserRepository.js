const User = require('../models/User');

class UserRepository {
  findByLogin = async ({ login }) => {
    return await User.findOne({ raw: true, where: { login } });
  }

  create = async ({ name, login, password, role }) => {
    return await User.create({
      name,
      login,
      password,
      role
    });
  }

  update = async ({ newName, login, newPassword }) => {
    const user = await User.findOne({ where: { login } });

    return await user.update({ name: newName, password: newPassword });
  }
}

module.exports = UserRepository;
