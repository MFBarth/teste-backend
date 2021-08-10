const jwt = require('jsonwebtoken');

const UserRepository = require('../repositories/UserRepository');
const VoteRepository = require('../repositories/VoteRepository');
const MovieRepository = require('../repositories/MovieRepository');
const authConfig = require('../config/auth');

class CreateVoteService {

  execute = async ({ vote, user_id, movie_id }) => {
    const userRepository = new UserRepository();
    const movieRepository = new MovieRepository();

    if (!await userRepository.findById({ user_id })) {
      throw new Error('User not found');
    }

    if (!await movieRepository.findById({ movie_id })) {
      throw new Error('Movie not found');
    }

    const voteRepository = new VoteRepository();

    const storedVote = await voteRepository.create({
      vote,
      user_id,
      movie_id
    });

    return {
      Vote: {
        id: storedVote.id,
        vote: storedVote.vote,
      },
    }
  }
}

module.exports = CreateVoteService;