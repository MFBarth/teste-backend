const jwt = require('jsonwebtoken');

const UserRepository = require('../repositories/UserRepository');
const authConfig = require('../config/auth');

class CreateUserService {

  execute = async ({ name, login, password, role, user_id }) => {
    const userRepository = new UserRepository();
    const userFound = await userRepository.findById({ user_id });

    if (userFound.role !== 'admin' && role !== 'voter') {
      throw new Error('Only Administrators can perform this action');
    }

    if (await userRepository.findByLogin({ login })) {
      throw new Error('Login address already used');
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