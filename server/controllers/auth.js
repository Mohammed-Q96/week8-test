const { verify } = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  verify(req.cookies.token, process.env.secret, (err, result) => {
    if (err) throw err;
    const { isLogged } = result;
    if (isLogged) {
      req.user = { isLogged };
      next();
    } else {
      console.log('inside auth');
      res.redirect('/');
    }
  });
};
