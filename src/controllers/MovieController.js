const CreateMovieService = require('../services/CreateMovieService');

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
}

module.exports = MovieController;
