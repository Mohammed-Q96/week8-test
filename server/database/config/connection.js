const { Pool } = require('pg');
require('env2')('./config.env');

const dbUrl = process.env.DB_URL;
if (!dbUrl) throw new Error('No Database URL!!!');

const options = {
  connectionString: dbUrl,
  ssl: true
};

module.exports = new Pool(options);
