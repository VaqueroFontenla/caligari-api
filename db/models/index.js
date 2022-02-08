const { Feature, FeatureSchema } = require('./feature.model');
const { Inn, InnSchema } = require('./inn.model');

function setupModels(sequelize) {
  Feature.init(FeatureSchema, Feature.config(sequelize));
  Inn.init(InnSchema, Inn.config(sequelize));
}

module.exports = setupModels;
