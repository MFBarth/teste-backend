const jwt = require('jsonwebtoken');

const UserRepository = require('../repositories/UserRepository');
const authConfig = require('../config/auth');

class CreateUserService {

  execute = async ({ name, login, password, role }) => {
    const userRepository = new UserRepository();

    if (await userRepository.findByLogin({ login })) {
      throw new Error('Email address already used');
    }

    const storedUser = await userRepository.create({
      name,
      login,
      password,
      role
    });

    const { secret, expiresIn } = authConfig;
    const token = jwt.sign({}, secret, { subject: storedUser.id, expiresIn });

    return {
      user: {
        id: storedUser.id,
        name: storedUser.name,
        login: storedUser.login
      },
      token
    }
  }
}

module.exports = CreateUserService;