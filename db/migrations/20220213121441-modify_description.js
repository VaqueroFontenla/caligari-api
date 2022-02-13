'use strict';
const { DataTypes } = require('sequelize');
const { INN_TABLE } = require('./../models/inn.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(INN_TABLE, 'description', {
      allowNull: true,
      type: DataTypes.TEXT,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(INN_TABLE, 'description', {
      allowNull: true,
      type: DataTypes.TEXT,
    });
  },
};
