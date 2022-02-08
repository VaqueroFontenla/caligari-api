const { Model, DataTypes, Sequelize } = require('sequelize');
const FEATURE_TABLE = 'features';
const FetureSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGEr,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Feature extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: FEATURE_TABLE,
      modelName: 'Feature',
      timestamps: false,
    };
  }
}

module.exports = { FEATURE_TABLE, FetureSchema, Feature };
