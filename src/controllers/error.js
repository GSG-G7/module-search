exports.clientError = (req, res) => {
  res.status(404).send('Page Not Found');
};
exports.serverError = (err, req, res, next) => {
  res.status(500).send('Server Error');
};
