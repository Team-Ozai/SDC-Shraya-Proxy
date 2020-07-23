require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const port = 4001;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

app.listen(port, () => console.log(`Proxy server is listening at http://localhost:${port}`));

