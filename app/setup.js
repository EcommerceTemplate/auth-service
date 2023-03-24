const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async function () {
  const mongoServer = new MongoMemoryServer();
  process.env.MONGO_URI = await mongoServer.getUri();
  global.__MONGO_SERVER__ = mongoServer; // exporta la variable al ámbito global
};
