const CreateMovieService = require('../services/CreateMovieService');
const SearchMovieService = require('../services/SearchMovieService');
const DetailMovieService = require('../services/DetailMovieService');

class MovieController {

  create = async (req, res) => {
    const { name, director, gender, actors } = req.body;
    const { id } = req.user;
    const createMovieService = new CreateMovieService();

    try {
      const createdMovie = await createMovieService.execute({
        name,
        director,
        gender,
        actors,
        user_id: id
      });

      return res.status(200).json(createdMovie);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  search = async (req, res) => {
    const { name, director, gender, actors } = req.query;
    const searchMovieService = new SearchMovieService();

    try {
      const foundMovies = await searchMovieService.execute({
        name,
        director,
        gender,
        actors: actors && JSON.parse(actors),
      });

      return res.status(200).json(foundMovies);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  details = async (req, res) => {
    const { movie_id } = req.params;

    const detailMovieService = new DetailMovieService();

    try {
      const foundMovies = await detailMovieService.execute({ movie_id });

      return res.status(200).json(foundMovies);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = MovieController;
