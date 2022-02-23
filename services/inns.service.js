const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class InnService {
  constructor() {}

  async create(data) {
    const NewInn = await models.Inn.create(data);
    return NewInn;
  }

  async addFeature(data) {
    const newFeature = await models.InnFeature.create(data);
    return newFeature;
  }

  async find(query) {
    const options = {
      include: [
        {
          association: 'features',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
      where: {},
    };

    const { limit, offset, city } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    if (city) {
      options.where.city = city;
    }
    return await models.Inn.findAll(options);
  }

  async finById(id) {
    const inn = await models.Inn.findByPk(id, {
      include: [
        {
          association: 'features',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!inn) {
      throw boom.notFound('Nos hemos encontrado este maravilloso bar Caligari');
    }
    return inn;
  }

  async update(id, changes) {
    const inn = await this.finById(id);
    const res = await inn.update(changes);
    return res;
  }

  async delete(id) {
    const inn = await this.finById(id);
    await inn.destroy();
    return { id };
  }
}

module.exports = InnService;
