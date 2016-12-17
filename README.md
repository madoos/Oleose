## Saras traslations - Landing Page


## Run

  * `node /server/index.js`
  * port: `3002`

## Api

### /contact

Send in POST method
 
 ```javascript

var contact = {
  name,
  email,
  message
}

```


## Enviroment 

  * NODE_ENV
  * BOT_EMAIL
  * BOT_PASS
  * EMAIL_SERVICE #`Gmail`
  * OWNER_EMAIL
  * OWNER_DIRECTION
  * OWNER_EMAIL
  * OWNER_TEL
  * OWNER_LINKEDIN

## Change style

  * Install grunt
  * Execute in the root  project `grunt`
  * Edit less files `/public/assets/less/*.less` 

## Run in Docker

### image 

  madoos/saras-translations:1.0.0