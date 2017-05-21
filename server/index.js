'use strict';

const config = require('./config');
const path = require('path')
const express = require('express');
const swig = require('swig');
const bodyParser = require('body-parser');
const app = express();
const mailer = require('./mailer');
const translator = require('./viewTraslator/translator');

// Templates
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../public/views'));
app.set('view cache', false);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
app.use('/dist', express.static(path.join(__dirname, '../public/dist')));

// Routers
app.get('/google58999bd9099a79f0', function (req, res) {
  res.render('google'); // google confirmation
});

app.get('/:lang?', function (req, res) {
  const lang = req.params.lang || req.acceptsLanguages('es', 'en');
  res.render('index', translator.translate(lang));
});


app.post('/contact', function(req, res){
  const contact = req.body;

  mailer.sendToOwner(contact, function(err, info){
    console.log('err: ', err, 'info:', info)
    if(!err) return res.status(200).send(info);
    return  res.status(404).send(err);
  });

});

app.listen(3002, function (err) {

  if ( err) console.log(err);
  else  console.log('servers running in port 3002!', 'With config', config);
});