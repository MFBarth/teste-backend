const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Movie = require('../models/Movie');
const Vote = require('../models/Vote');

const connection = new Sequelize(dbConfig);

User.init(connection);
Movie.init(connection);
Vote.init(connection);

module.exports = connection;
