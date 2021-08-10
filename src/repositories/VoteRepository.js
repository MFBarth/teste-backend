const Vote = require('../models/Vote');

class VoteRepository {

  create = async ({ vote, user_id, movie_id }) => {
    return await Vote.create({
      vote,
      user_id,
      movie_id
    });
  }

}

module.exports = VoteRepository;
