'use strict';

const config = require('./config');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
        service:  config.EMAIL_SERVICE,
        auth: {user: config.BOOT_EMAIL, pass: config.BOOT_PASS}
    });

module.exports = {
    sendToSara
}

function sendToSara(contact, cb) {
    const mailOptions = {
        from: `<${config.BOOT_EMAIL}>`,
        to: `<${config.SARA_EMAIL}>`,
        subject: 'Nuevo  Contacto para tu trabajo de Traductora ser de luz :)',
        html: `<p>Name: ${contact.name}</p><p>Email: ${contact.email}</p><p>Message: ${contact.message}</p>`
    };

    transporter.sendMail(mailOptions, cb);
};