const { Model, DataTypes, Sequelize } = require('sequelize');
const { FEATURE_TABLE } = require('./feature.model');
const { INN_TABLE } = require('./inn.model');

const INN_FEATURE_TABLE = 'inns_features';
const InnFeatureSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  featureId: {
    field: 'feature_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: FEATURE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  innId: {
    field: 'inn_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: INN_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class InnFeature extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: INN_FEATURE_TABLE,
      modelName: 'InnFeature',
      timestamps: false,
    };
  }
}

module.exports = { INN_FEATURE_TABLE, InnFeatureSchema, InnFeature };
