const jwt = require('jsonwebtoken');

const UserRepository = require('../repositories/UserRepository');
const MovieRepository = require('../repositories/MovieRepository');
const authConfig = require('../config/auth');

class CreateUserService {

  execute = async ({ name, director, gender, actors, user_id }) => {
    const userRepository = new UserRepository();
    const userFound = await userRepository.findById({ user_id });

    if (!userFound) {
      throw new Error('User not found');
    }

    if (userFound.role !== 'admin') {
      throw new Error('User does not have permission to register a movie');
    }

    const movieRepository = new MovieRepository();

    const storedMovie = await movieRepository.create({
      name,
      director,
      gender,
      actors,
      user_id
    });

    return {
      movie: {
        id: storedMovie.id,
        name: storedMovie.name,
        director: storedMovie.director,
        gender: storedMovie.gender,
        actors: storedMovie.actors,
      },
    }
  }
}

module.exports = CreateUserService;