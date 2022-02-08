const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');
class InnService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    const NewInn = await models.Inn.create(data);
    return NewInn;
  }

  async find() {
    return await models.Inn.findAll();
  }

  async finById(id) {
    const inn = await models.Inn.findByPk(id);
    if (!inn) {
      throw boom.notFound('Nos hemos encontrado este maravilloso bar Caligari');
    }
    return inn;
  }

  async update(id, changes) {
    const inn = awaitthis.finById(id);
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
