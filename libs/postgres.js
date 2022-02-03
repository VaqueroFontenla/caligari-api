const { Client } = require('pg');

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'loreto',
    password: 'admin123',
    database: 'caligari',
  });
  await client.connect();
  return client;
};

module.exports = getConnection;
