const { Router } = require('express');

const VoteController = require('../controllers/VoteController');

const voteRouter = Router();
const voteController = new VoteController();

voteRouter.post('/', voteController.create);

module.exports = voteRouter;