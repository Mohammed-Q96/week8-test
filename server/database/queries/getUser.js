// Write a query to get the user and their password from the database
const connection = require('../config/connection');

exports.getUser = email => {
  const sql = {
    text: 'SELECT email, password FROM test_user WHERE email LIKE $1;',
    values: [email]
  };
  return connection.query(sql);
};
