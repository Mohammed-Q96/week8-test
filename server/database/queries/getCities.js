const dbConnection = require('../config/connection');

const getCities = () => {
  return dbConnection.query(`SELECT * FROM city;`);
};

module.exports = {
  getCities
};
