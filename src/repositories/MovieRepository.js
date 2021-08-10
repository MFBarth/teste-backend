const uuid = require('uuid');
const Movie = require('../models/Movie');


class MovieRepository {
  findById = async ({ movie_id }) => {
    return await Movie.findByPk(movie_id);
  }

  create = async ({ name, director, gender, actors, user_id }) => {
    return await Movie.create({
      name,
      director,
      gender,
      actors,
      user_id
    });
  }

}

module.exports = MovieRepository;
