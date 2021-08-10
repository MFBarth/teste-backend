const MovieRepository = require('../repositories/MovieRepository');
const VoteRepository = require('../repositories/VoteRepository');

class DetailMovieService {

  execute = async ({ movie_id }) => {
    const movieRepository = new MovieRepository();
    const voteRepository = new VoteRepository();

    const foundMovie = await movieRepository.findById({ movie_id });

    if (!foundMovie) {
      throw new Error('Movie not found');
    }

    const votesFound = await voteRepository.findAllByMovie({ movie_id });

    let getAllVotes = 0;
    for (const voteObject of votesFound) {
      getAllVotes = voteObject.vote;
    }

    const getAverage = parseFloat(getAllVotes / votesFound.length).toFixed(1);

    return {
      movie: foundMovie,
      average: getAverage
    }
  }
}

module.exports = DetailMovieService;