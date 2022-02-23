const { Feature, FeatureSchema } = require('./feature.model');
const { Inn, InnSchema } = require('./inn.model');
const { InnFeature, InnFeatureSchema } = require('./inn-feature.model');
function setupModels(sequelize) {
  Feature.init(FeatureSchema, Feature.config(sequelize));
  Inn.init(InnSchema, Inn.config(sequelize));
  InnFeature.init(InnFeatureSchema, InnFeature.config(sequelize));

  Inn.associate(sequelize.models);
}

module.exports = setupModels;
