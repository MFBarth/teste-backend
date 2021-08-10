const UserRepository = require('../repositories/UserRepository');

class DeleteUserService {

  execute = async ({ login, role, user_id }) => {
    const userRepository = new UserRepository();
    const userFound = await userRepository.findById({ user_id });

    if (userFound.role !== 'admin' && role !== 'voter') {
      throw new Error('Only Administrators can perform this action');
    }

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