/* eslint-disable no-trailing-spaces */
const { join } = require('path');
const { hash, genSalt } = require('bcrypt');
const { addUser } = require('../database/queries/addUser');
const { getUser } = require('../database/queries/getUser');

exports.renderSignup = (_req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signup.html'));
};

exports.post = (req, res, next) => {
  const { email, password } = req.body;
  getUser(email)
    .then(result => result.rows.length === 0)
    .then(isLogged => {
      if (isLogged) {
        return genSalt().then(hash(password, 10));
      }
      throw Error('Email exists');
    })
    .then(hashed => addUser({ email, password: hashed }))
    .then(res.redirect('/'))
    .catch(err => {
      if (err.message === 'username exists') return res.send(err.message);
      return next(err);
    });
};
