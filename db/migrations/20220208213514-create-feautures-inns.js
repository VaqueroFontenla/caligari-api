'use strict';
const { FEATURE_TABLE, FeatureSchema } = require('../models/feature.model');
const { INN_TABLE, InnSchema } = require('../models/inn.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(FEATURE_TABLE, FeatureSchema);
    await queryInterface.createTable(INN_TABLE, InnSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(FEATURE_TABLE);
    await queryInterface.dropTable(INN_TABLE);
  },
};
