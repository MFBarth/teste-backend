const { Router } = require('express');

const MovieController = require('../controllers/MovieController');

const movieRouter = Router();
const movieController = new MovieController();

movieRouter.post('/', movieController.create);

module.exports = movieRouter;