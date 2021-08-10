const { Router } = require('express');

const UserController = require('../controllers/UserController');

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/', userController.create);
usersRouter.put('/', userController.update);
usersRouter.put('/delete', userController.delete);

module.exports = usersRouter;