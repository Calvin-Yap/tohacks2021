require('dotenv').config();
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  port: process.env.port,
  password: process.env.password
});

