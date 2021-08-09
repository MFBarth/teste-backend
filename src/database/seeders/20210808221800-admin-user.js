const uuid = require('uuid');
const bcrypt = require('bcrypt');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: uuid.v4(),
        name: 'Matheus Barth',
        login: 'mfbarth',
        password: await bcrypt.hash('admin123', 8),
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
