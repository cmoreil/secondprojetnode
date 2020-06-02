const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator/check');
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  auth: {
     user: 'caroline.moreil@epitech.eu',
     pass: 'n?UYtEDO'
  }
});

exports.getLogin = (req, res, next) => {
    res.render('auth/login', { title: 'login' });
  }

exports.getRegister = (req, res, next) => {
    res.render('auth/register', { title: 'register' });
  }

exports.validate = (method) => {
    switch (method) {
      case 'register': {
       return [
        check('username', 'Username doesn\'t exists and/or is not between 3 and 20 characters').exists().isLength({ min: 3, max: 20 }),
        check('email', 'Invalid email').exists().isEmail(),
        check('password', 'Password doesn\'t exists and/or is not between 3 and 20 characters').exists().isLength({ min: 3, max: 20 })
        ]
      }
    }
  }

  async function register (req, res, next) {

      const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      mailOptions = {
        from: 'caroline.moreil@epitech.eu',
        to: req.body.email,
        subject: 'Merci pour votre inscription',
        html: '<p>Bonjour, nous vous confirmons votre inscription et nous vous en félicitons. A bientôt sur Monpotagerurbain.org ! Bien cordialement, Toute l\'équipe de Mon potager urbain.</p>'
      }

      today = new Date();
      date = today.toLocaleDateString();
      time = today.toLocaleTimeString("fr-FR");
      dateTime = date+' '+time;
      bcrypt.hash(req.body.password, 10)
      .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash,
        admin: false,
        username: req.body.username,
        created_at: dateTime
      })
      user.save()

      .then(
        result => {
          res.status(201).json({
            userId: user._id,
            email: user.email,
            username: user.username,
            admin: user.admin,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
              )
            });
        return transport.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
          });
        })
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

  async function login (req, res, next) {
      User.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            return res.status(401).json({ error: 'User not find!' });
          }
          bcrypt.compare(req.body.password, user.password)
            .then(valid => {
              if (!valid) {
                return res.status(401).json({ error: 'Incorrect password !' });
              }
              res.status(200).json({
                userId: user._id,
                username: user.username,
                admin: user.admin,
                token: jwt.sign(
                  { userId: user._id },
                  'RANDOM_TOKEN_SECRET',
                  { expiresIn: '24h' }
                )
              });
              let headers = new Headers();
              headers.append("Authorization","Beared "+ token);
              this.http.post(AUTHENTICATION_ENDPOINT + "?grant_type=password&scope=trust&username=" + login + "&password=" + password, null, {headers: headers}).subscribe(response => {
                console.log(response);
              });
            })
        })
        .catch(error => res.status(500).json({ error }));
  };

  async function getLastUser(req, res, next) {
    User.find()
      .sort({_id: -1})
      .limit(10)
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'No user !' });
        }
        res.status(201).json({ user });
      })
      .catch(error => res.status(500).json({ error }));
  };

  async function getUser(req, res, next) {
    User.find()
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'No user !' });
        }
        res.status(201).json({ user });
      })
      .catch(error => res.status(500).json({ error }));
  };

  async function getByIdUser (req, res, next) {
    User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
  };

  async function deleteUser (req, res, next) {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'User deleted :('}))
        .catch(error => res.status(400).json({ error }));
  };

  async function updateUser (req, res) {
    User.findByIdAndUpdate ( req.params.id,
      {$set: { username: req.body.username, email: req.body.email, password: req.body.password}},
      {new: true},
      function (err, editUser){
        if(err) { res.send("error updating user")}
        else { res.json(editUser)}
      }
    )
  }

exports.login = login;
exports.register = register;
exports.getUser = getUser;
exports.getLastUser = getLastUser;
exports.getByIdUser = getByIdUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;