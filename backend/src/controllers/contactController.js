const Contact = require('../models/contact');
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  auth: {
     user: 'caroline.moreil@epitech.eu',
     pass: 'n?UYtEDO'
  }
});

async function postContact (req, res, next) {

  today = new Date();
  date = today.toLocaleDateString();
  time = today.toLocaleTimeString("fr-FR");
  dateTime = date+'  '+time;

  mailOptions = {
    from: 'caroline.moreil@epitech.eu',
    to: req.body.email,
    subject: 'Merci pour votre message',
    //text: 'Bonjour, nous accusons réception de votre message, vous remercions pour celui-ci et y répondrons dans les meilleurs délais. Bien cordialement, Toute l\'équipe de Mon potager urbain',
    html: '<p>Bonjour, nous accusons réception de votre message, vous remercions pour celui-ci et y répondrons dans les meilleurs délais. Bien cordialement, Toute l\'équipe de Mon potager urbain.</p>'
  }

  const contact = new Contact({
    email: req.body.email,
    message: req.body.message,
    date: dateTime
  })

  contact.save()

    .then(
      result => {
        res.status(201).json({ contact });
        return transport.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

async function getContact (req, res, next) {
    Contact.find()
      .then(contact => {
        if (!contact) {
          return res.status(401).json({ error: 'No messages !' });
        }
        res.status(201).json({ contact });
      })
      .catch(error => res.status(500).json({ error }));
};

async function deleteContact (req, res, next) {
  Contact.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Message deleted !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.getContact = getContact;
exports.postContact = postContact;
exports.deleteContact = deleteContact;