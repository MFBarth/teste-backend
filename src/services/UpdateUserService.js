const UserRepository = require('../repositories/UserRepository');

class UpdateUserService {

  execute = async ({ newName, login, newPassword }) => {
    const userRepository = new UserRepository();

    const updatedUser = await userRepository.update({
      newName,
      login,
      newPassword,
    });

    return {
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        login: updatedUser.login,
      },
    }
  }
}

module.exports = UpdateUserService;