const CreateVoteService = require('../services/CreateVoteService');

class MovieController {

  create = async (req, res) => {
    const { vote, movie_id } = req.body;
    const { id } = req.user;
    const createVoteService = new CreateVoteService();

    try {
      const createdVote = await createVoteService.execute({
        vote,
        user_id: id,
        movie_id
      });

      return res.status(200).json(createdVote);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = MovieController;
