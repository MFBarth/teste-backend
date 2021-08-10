const CreateUserService = require('../services/CreateUserService');
const UpdateUserService = require('../services/UpdateUserService');

class UserController {

  create = async (req, res) => {
    const { name, login, password } = req.body;
    const createUserService = new CreateUserService();

    try {
      const createdUser = await createUserService.execute({
        name,
        login,
        password,
        role: 'voter'
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
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = UserController;
