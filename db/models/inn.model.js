const { Model, DataTypes, Sequelize } = require('sequelize');
const INN_TABLE = 'inns';
const InnSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lat: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  lon: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  rating: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Inn extends Model {
  static associate(models) {
    this.belongsToMany(models.Feature, {
      as: 'features',
      through: models.InnFeature,
      foreignKey: 'innId',
      otherKey: 'featureId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: INN_TABLE,
      modelName: 'Inn',
      timestamps: false,
    };
  }
}

module.exports = { INN_TABLE, InnSchema, Inn };
