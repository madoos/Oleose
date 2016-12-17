'use strict';

const config = require('./config');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
        service:  config.EMAIL_SERVICE,
        auth: {user: config.BOT_EMAIL, pass: config.BOT_PASS}
    });

module.exports = {
    sendToOwner
}

function sendToOwner(contact, cb) {
    const mailOptions = {
        from: `<${config.BOT_EMAIL}>`,
        to: `<${config.OWNER_EMAIL}>`,
        subject: 'Nuevo  Contacto para tu trabajo de Traductora ser de luz :)',
        html: `<p>Name: ${contact.name}</p><p>Email: ${contact.email}</p><p>Message: ${contact.message}</p>`
    };

    transporter.sendMail(mailOptions, cb);
};
