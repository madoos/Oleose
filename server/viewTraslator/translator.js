'use strict';

const webTexts= require('./webTexts');

module.exports = {
    translate
};

function translate(lang){
    const allowedLangs = {es: 'es', en: 'en'};
    const selectedLang = allowedLangs[lang] || 'es';

    webTexts['lang'] = selectedLang
    return webTexts;
}