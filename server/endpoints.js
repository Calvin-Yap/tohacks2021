require('dotenv').config();
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  port: process.env.port,
  password: process.env.password,
  ssl:{
      rejectUnauthorized: false,
  }
});

const getPosts= () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM fItem', (error, results) => {
        if (error) {
            console.log(error);
        }

        resolve(results.rows);
      })
    }) 
  };
  const createPosts = (body) => {
    return new Promise(function(resolve, reject) {
      const { itemId, restName, dishName, description, image, link, price, fillingness } = body
      pool.query('INSERT INTO fItem(itemId, restName, dishName, description, image, link, price, fillingness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [itemId, restName, dishName, description, image, link, price, fillingness], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(rows)
      })
    })
  }
  module.exports = {
    getPosts,
    createPosts
  };