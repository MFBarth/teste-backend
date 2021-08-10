const { Router } = require('express');

const usersRouter = require('./users.routes');
const adminRouter = require('./admin.routes');
const sessionRouter = require('./session.routes');
const moviesRouter = require('./movies.routes');
const votesRouter = require('./votes.routes');

const authMiddleware = require('../middlewares/auth');

const routes = Router();

routes.use('/sessions/', sessionRouter);

routes.use(authMiddleware);

routes.use('/users/', usersRouter);
routes.use('/adminUsers/', adminRouter);
routes.use('/movies/', moviesRouter);
routes.use('/votes/', votesRouter);

module.exports = routes;
