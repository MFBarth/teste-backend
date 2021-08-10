const { Router } = require('express');

const usersRouter = require('./users.routes');
const adminRouter = require('./admin.routes');
const sessionRouter = require('./session.routes');

const authMiddleware = require('../middlewares/auth');

const routes = Router();

routes.use('/sessions/', sessionRouter);

routes.use(authMiddleware);

routes.use('/users/', usersRouter);
routes.use('/adminUsers/', adminRouter);

module.exports = routes;
