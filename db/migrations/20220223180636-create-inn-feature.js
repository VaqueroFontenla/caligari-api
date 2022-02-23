'use strict';
const {
  INN_FEATURE_TABLE,
  InnFeatureSchema,
} = require('../models/inn-feature.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(INN_FEATURE_TABLE, InnFeatureSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(INN_FEATURE_TABLE, InnFeatureSchema);
  },
};
