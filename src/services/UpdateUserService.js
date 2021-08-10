const UserRepository = require('../repositories/UserRepository');

class UpdateUserService {

  execute = async ({ newName, login, newPassword, role, user_id }) => {
    const userRepository = new UserRepository();
    const userFound = await userRepository.findById({ user_id });

    if (userFound.role !== 'admin' && role !== 'voter') {
      throw new Error('Only Administrators can perform this action');
    }

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