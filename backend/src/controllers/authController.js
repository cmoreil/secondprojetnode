const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator/check');

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
      .then(() => res.status(201).json({
        userId: user._id,
        username: user.username,
        admin: user.admin,
        token: jwt.sign(
          { userId: user._id },
          'RANDOM_TOKEN_SECRET',
          { expiresIn: '24h' }
          )
        }))
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

exports.login = login;
exports.register = register;
exports.getUser = getUser;
exports.getLastUser = getLastUser;