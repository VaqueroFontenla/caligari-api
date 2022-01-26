const boom = require('@hapi/boom');
const inns = require('../data/inns.json');
const makeRandomId = require('../utils/makerandomId');
class InnService {
  constructor() {
    this.inns = inns;
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
    return this.inns;
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
