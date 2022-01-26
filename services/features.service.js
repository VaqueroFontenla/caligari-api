const boom = require('@hapi/boom');
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
    const feature = this.features.find((feature) => feature.id === +id);
    if (!feature) {
      throw boom.notFound('Nos hemos encontra esta singularidad Caligaresca');
    }
    return feature;
  }

  async update(id, changes) {
    const index = this.features.findIndex((feature) => feature.id === +id);
    if (index === -1) {
      throw boom.notFound('Nos hemos encontra esta singularidad Caligaresca');
    }
    const feature = this.features[index];
    this.features[index] = { ...feature, ...changes };
    return this.features[index];
  }

  async delete(id) {
    const index = this.features.findIndex((feature) => feature.id === +id);
    if (index === -1) {
      throw boom.notFound('Nos hemos encontra esta singularidad Caligaresca');
    }
    this.features.splice(index, 1);
    return { id };
  }
}

module.exports = FeaturesService;
