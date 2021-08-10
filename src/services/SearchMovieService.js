const MovieRepository = require('../repositories/MovieRepository');

class SearchMovieService {

  execute = async ({ name, director, gender, actors }) => {
    const movieRepository = new MovieRepository();

    const storedMovies = await movieRepository.findBySearch({
      name,
      director,
      gender,
      actors,
    });

    return {
      movies: storedMovies
    }
  }
}

module.exports = SearchMovieService;