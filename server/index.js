'use strict';

const config = require('./config');
const path = require('path')
const express = require('express');
const swig = require('swig');
const bodyParser = require('body-parser');

const app = express();
const mailer = require('./mailer');

// Templates
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../public/views'));
app.set('view cache', false);

// Middlewares
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true})); 
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
app.use('/dist', express.static(path.join(__dirname, '../public/dist')));

// Routers
app.get('/', function (req, res) {
  res.render('index', {message: '*************************'});
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