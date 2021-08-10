const UserRepository = require('../repositories/UserRepository');
const VoteRepository = require('../repositories/VoteRepository');
const MovieRepository = require('../repositories/MovieRepository');

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

    const alredyVoted = await voteRepository.findUserAlredyVoteinMove({
      user_id,
      movie_id
    });

    if (alredyVoted) {
      const udatedVote = await voteRepository.update({
        vote,
        voteId: alredyVoted.id
      });

      return { Vote: udatedVote }

    } else {
      const storedVote = await voteRepository.create({
        vote,
        user_id,
        movie_id
      });

      return { Vote: storedVote }
    }
  }
}

module.exports = CreateVoteService;