#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
const apiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(apiKey);

const to = process.env.SENDGRID_TO.split(',');

const msg = {
    to,
    from: 'na.kamura.1263@gmail.com',
    subject: '[utda/ogai] デプロイが完了しました',
    text: '[utda/ogai] デプロイが完了しました',
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));