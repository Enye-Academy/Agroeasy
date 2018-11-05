const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path');

const product = require('./routes/productRoute'); // Imports routes for the products
const producer = require('./routes/producerRoute'); // Imports routes for the producers
const { connectToDB } = require('./helpers/db');

const app = express();
const server = http.createServer(app);
const { PORT = 4000 } = process.env;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Cross-Origin Resource Sharing CORS
//To enable access of resources from our server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/products', product);
app.use('/producers', producer);

server.listen(PORT, async() => {
  await connectToDB();
  console.log(`Listening on port ${PORT}`);
});
