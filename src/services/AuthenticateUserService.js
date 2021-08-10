const jwt = require('jsonwebtoken');
const { compare } = require('bcrypt');

const UserRepository = require('../repositories/UserRepository');
const authConfig = require('../config/auth');

class AuthenticateUserService {

  execute = async ({ login, password }) => {
    const userRepository = new UserRepository();
    const userFound = await userRepository.findByLogin({ login });

    if (!userFound) {
      throw new Error('Incorrect login/password combination');
    }

    const passwordMatched = await compare(password, userFound.password);

    if (!passwordMatched) {
      throw new Error('Incorrect login/password combination');
    }

    const { secret, expiresIn } = authConfig;
    const token = jwt.sign({}, secret, { subject: userFound.id, expiresIn });

    return {
      user: {
        id: userFound.id,
        name: userFound.name,
        login: userFound.login
      },
      token
    }
  }
}

module.exports = AuthenticateUserService