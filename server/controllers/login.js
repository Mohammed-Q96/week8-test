const { join } = require('path');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { getUser } = require('../database/queries/getUser');
console.log(process.env.secret);

exports.renderLogin = (_req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
};

exports.postL = (req, res, next) => {
  const { email, password } = req.body;
  getUser(email)
    .then(result => {
      return result.rows[0];
    })
    .then(foundedUser => compare(password, foundedUser.password))
    .then(Pass => {
      if (Pass) {
        sign({ isLogged: true }, process.env.secret, (err, token) => {
          if (err) throw err;
          res.cookie('token', token);
          res.redirect('/');
        });
      } else {
        res.send('incorrect password');
      }
    })
    .catch(err => {
      next(err);
    });
};
