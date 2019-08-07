const nodefetch = require('node-fetch');

exports.getData = (req, res) => {
  const npmModule = req.body.inputValue;
  const url = `https://libraries.io/api/NPM/${npmModule}?api_key=9d6daf8cc3a087418203a84deaf6164d`;
  nodefetch(url)
    .then(resp => resp.json())
    .then(resp => console.log(resp.description))
    .catch(err => console.log(err));
};
