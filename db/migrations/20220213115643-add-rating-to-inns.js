'use strict';

const { InnSchema, INN_TABLE } = require('./../models/inn.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(INN_TABLE, 'rating', InnSchema.rating);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(INN_TABLE, 'rating');
  },
};
