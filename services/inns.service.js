const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
const makeRandomId = require('../utils/makerandomId');
class InnService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    const newInn = {
      id: makeRandomId(),
      ...data,
    };
    this.inns.push(newInn);
    return newInn;
  }

  async find() {
    const query = 'SELECT * FROM inns';
    const res = await this.pool.query(query);
    return res.rows;
  }

  async finById(id) {
    const inn = this.inns.find((inn) => inn.id === +id);
    if (!inn) {
      throw boom.notFound('Nos hemos encontra este bar Caligari');
    }
    return inn;
  }

  async update(id, changes) {
    const index = this.inns.findIndex((inn) => inn.id === +id);
    if (index === -1) {
      throw boom.notFound('Nos hemos encontra este bar Caligari');
    }
    const inn = this.inns[index];
    this.inns[index] = { ...inn, ...changes };
    return this.inns[index];
  }

  async delete(id) {
    const index = this.inns.findIndex((inn) => inn.id === +id);
    if (index === -1) {
      throw boom.notFound('Nos hemos encontra este bar Caligari');
    }
    this.inns.splice(index, 1);
    return { id };
  }
}

module.exports = InnService;
