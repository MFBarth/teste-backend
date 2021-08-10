const CreateUserService = require('../services/CreateUserService');
const UpdateUserService = require('../services/UpdateUserService');
const DeleteUserService = require('../services/DeleteUserService');

class AdminController {

  create = async (req, res) => {
    const { name, login, password } = req.body;
    const createUserService = new CreateUserService();

    try {
      const createdUser = await createUserService.execute({
        name,
        login,
        password,
        role: 'admin'
      });

      return res.status(200).json(createdUser);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  update = async (req, res) => {
    const { newName, login, newPassword } = req.body;
    const updateUserService = new UpdateUserService();

    try {
      const updateUser = await updateUserService.execute({
        newName,
        login,
        newPassword,
      });

      return res.status(200).json(updateUser);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  delete = async (req, res) => {
    const { login } = req.body;
    const deleteUserService = new DeleteUserService();

    try {
      const deletedUser = await deleteUserService.execute({ login });

      return res.status(200).json(
        {
          message: 'User disabled with success',
          deletedUser
        }
      );
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

module.exports = AdminController;
