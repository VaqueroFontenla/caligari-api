const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');

class FeaturesService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    const newFeature = await models.Feature.create(data);
    if (!newFeature) {
      throw boom.notFound(
        'Nos hemos podido crear esta singularidad Caligaresca'
      );
    }
    return newFeature;
  }

  async find() {
    return await models.Feature.findAll();
  }

  async finById(id) {
    const feature = await models.Feature.findByPk(id);
    if (!feature) {
      throw boom.notFound('Nos hemos encontrado esta singularidad Caligaresca');
    }
    return feature;
  }

  async update(id, changes) {
    const feature = await this.finById(id);
    const res = await feature.update(changes);
    return res;
  }

  async delete(id) {
    const feature = await this.finById(id);
    await feature.destroy();
    return { id };
  }
}

module.exports = FeaturesService;
