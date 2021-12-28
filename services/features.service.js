const features = require('../data/features.json');
const makeRandomId = require('../utils/makerandomId');

class FeaturesService {
  constructor() {
    this.features = features;
  }

  async create(data) {
    const newFeature = {
      id: makeRandomId(),
      ...data,
    };
    this.features.push(newFeature);
    return newFeature;
  }

  async find() {
    return this.features;
  }

  async finById(id) {
    return this.features.find((feature) => feature.id === +id);
  }

  async update(id, changes) {
    const index = this.features.findIndex((feature) => feature.id === +id);
    if (index === -1) {
      throw new Error('feature not found');
    }
    const feature = this.features[index];
    this.features[index] = { ...feature, ...changes };
    return this.features[index];
  }

  async delete(id) {
    const index = this.features.findIndex((feature) => feature.id === +id);
    if (index === -1) {
      throw new Error('feature not found');
    }
    this.features.splice(index, 1);
    return { id };
  }
}

module.exports = FeaturesService;
