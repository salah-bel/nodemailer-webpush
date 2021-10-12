const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'key-e9190ead33dae378570c548096efb806',
        domain: 'sandboxc84464f71348422aafc331f428a4a06e.mailgun.org'
    }
};
// Transporter config
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, message) => {
    const mailOptions = {
        from: email,
        to: 'belasalah@gmail.com',
        subject: subject,
        text: 'hello',
        html: '<h1>' + message + '</h1>'
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info)
            console.log('sended ')

        }
    });
}

// Exporting the sendmail
module.exports = sendMail;