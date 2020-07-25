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

app.get('/loaderio-ace45341499345f69a20205f1203e7b1.txt', (req, res) => {
  res.send('loaderio-ace45341499345f69a20205f1203e7b1.txt')
})

app.listen(port, () => console.log(`Proxy server is listening at http://localhost:${port}`));

