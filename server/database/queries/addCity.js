const dbConnection = require('../config/connection');

const addCity = userData => {
  const { name, country } = userData;
  const sql = {
    text: 'INSERT INTO city (name, country) VALUES ($1, $2);',
    values: [name, country]
  };
  return dbConnection.query(sql);
};

module.exports = {
  addCity
};
