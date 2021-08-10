const UserRepository = require('../repositories/UserRepository');

class DeleteUserService {

  execute = async ({ login }) => {
    const userRepository = new UserRepository();

    const deleteddUser = await userRepository.delete({ login });

    return {
      user: {
        id: deleteddUser.id,
        name: deleteddUser.name,
        login: deleteddUser.login,
      },
    }
  }
}

module.exports = DeleteUserService;