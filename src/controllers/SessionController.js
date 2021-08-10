const AuthenticateUserService = require('../services/AuthenticateUserService');

class SessionController {
  create = async (req, res) => {
    const { login, password } = req.body;
    const authenticateUserService = new AuthenticateUserService();

    try {
      const { user, token } = await authenticateUserService.execute({ login, password });

      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = SessionController;