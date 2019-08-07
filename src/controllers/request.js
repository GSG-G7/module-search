const nodefetch = require('node-fetch');
require('dotenv/config');

exports.getData = (req, res) => {
  const apiKey = process.env.API_KEY;
  const npmModule = req.body.input;
  console.log(req.body.input, '*********')
  const url = `https://libraries.io/api/NPM/${npmModule}?api_key=${apiKey}`;
  nodefetch(url).then(res => res.json())
    .then(resp => {
      res.render("home", {
        result: resp
      })
    })
    .catch(err => console.log(err));
};
