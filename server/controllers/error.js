exports.client = (req, res) => {
  const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';
  res.set('Content-Length', notFoundPage.length);
  res.status(404).send(notFoundPage);
};

// eslint-disable-next-line no-unused-vars
exports.server = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('err:', err);
  const internalServerError = '<p style="font-size: 10vh; text-align: center;">500!</p>';

  res.set('Content-Length', internalServerError.length);
  res.status(500).send(internalServerError);
};
