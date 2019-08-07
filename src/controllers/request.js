const nodefetch = require('node-fetch');
require('dotenv/config');

exports.getData = (req, res) => {
  const apiKey = process.env.API_KEY;
  const npmModule = req.body.input;
  const url = `https://libraries.io/api/NPM/${npmModule}?api_key=${apiKey}`;
  nodefetch(url).then(resp => resp.json())
    .then((resp) => {
      res.render('result', {
        result: resp,
      });
    })
    .catch(err => res.status(500).send(err));
};
