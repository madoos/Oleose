'use strict';

const prompts = require('./prompts');

module.exports = {
    translate
};

function translate(lang){
    const allowedLangs = {es: 'es', en: 'en'};
    const selectedLang = allowedLangs[lang] || 'es';

    console.log('lenguaje seleccionado', 'dvdf', selectedLang);
    return {}
}