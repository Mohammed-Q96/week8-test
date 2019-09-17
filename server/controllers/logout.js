exports.logOut = (_req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};
