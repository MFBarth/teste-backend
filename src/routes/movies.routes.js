const { Router } = require('express');

const MovieController = require('../controllers/MovieController');

const movieRouter = Router();
const movieController = new MovieController();

movieRouter.post('/', movieController.create);
movieRouter.get('/search', movieController.search);
movieRouter.get('/details/:movie_id', movieController.details);

module.exports = movieRouter;