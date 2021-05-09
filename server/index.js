require('dotenv').config;
const express = require('express')
const app = express()
const port = 3001;
const post_model = require('./endpoints')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});



app.get('/get', (req, res) => {
    post_model.getPosts()
    .then(response => {
      res.status(200).json(response.rows);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  app.post('/create', (req, res) => {
    post_model.createPosts  (req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

