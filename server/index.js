'use strict';

const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const mailer = require('./mailer');

// Middlewares
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true})); 
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
app.use('/dist', express.static(path.join(__dirname, '../public/dist')));

// Routers
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/contact', function(req, res){
  const contact = req.body;

  mailer.sendToSara(contact, function(err, info){
    if(!err) return res.status(200).send(info);
    return  res.status(404).send(err);
  });

});

app.listen(3000, function () {
  console.log('Sara servers running in port 3000!');
  console.log('With config', config);
});