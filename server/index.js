'use strict';

const express = require('express');
const path = require('path')
const app = express();

app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
app.use('/dist', express.static(path.join(__dirname, '../public/dist')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3000, function () {
  console.log('Sara servers running in port 3000!');
});