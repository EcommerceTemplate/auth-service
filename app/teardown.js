module.exports = async function () {
    await global.__MONGO_SERVER__.stop(); // usa la variable exportada del ámbito global
  };
  