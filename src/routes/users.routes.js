const { Router } = require('express');

const UserController = require('../controllers/UserController');

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/', userController.create);
usersRouter.put('/', userController.update);

module.exports = usersRouter;