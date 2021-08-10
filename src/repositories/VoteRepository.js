const Vote = require('../models/Vote');

class VoteRepository {
  findAllByMovie = async ({ movie_id }) => {
    return await Vote.findAll({
      raw: true, where: {
        movie_id
      }
    });
  }

  findUserAlredyVoteinMove = async ({ user_id, movie_id }) => {
    return await Vote.findOne({
      where: {
        user_id,
        movie_id
      }
    });
  }

  create = async ({ vote, user_id, movie_id }) => {
    return await Vote.create({
      vote,
      user_id,
      movie_id
    });
  }

  update = async ({ vote, voteId }) => {
    const user = await Vote.findByPk(voteId);

    return await user.update({ vote: vote });
  }

}

module.exports = VoteRepository;
