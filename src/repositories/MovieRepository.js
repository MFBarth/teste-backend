const { Op } = require('sequelize');
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

  findBySearch = async ({ name, director, gender, actors }) => {
    let whereSearch = {};
    if (name || director || gender || actors) {
      whereSearch[Op.or] = {};

      if (name) {
        whereSearch[Op.or].name = { [Op.iLike]: '%' + name + '%' }
      }

      if (director) {
        whereSearch[Op.or].director = { [Op.iLike]: '%' + director + '%' }
      }

      if (gender) {
        whereSearch[Op.or].gender = { [Op.iLike]: '%' + gender + '%' }
      }

      if (actors) {
        whereSearch[Op.or].actors = { [Op.contains]: actors }
      }
    }

    return await Movie.findAll({
      raw: true, where: whereSearch
    });
  }

}

module.exports = MovieRepository;
