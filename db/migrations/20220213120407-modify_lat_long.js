'use strict';
const { DataTypes } = require('sequelize');
const { INN_TABLE } = require('./../models/inn.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(INN_TABLE, 'lat', {
      allowNull: true,
      type: DataTypes.FLOAT,
    });
    await queryInterface.changeColumn(INN_TABLE, 'lon', {
      allowNull: true,
      type: DataTypes.FLOAT,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(INN_TABLE, 'lat', {
      allowNull: false,
      type: DataTypes.DECIMAL,
    });
    await queryInterface.changeColumn(INN_TABLE, 'lon', {
      allowNull: false,
      type: DataTypes.DECIMAL,
    });
  },
};
