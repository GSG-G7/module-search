const nodefetch = require('node-fetch');

exports.getData = (req, res) => {
  const npmModule = req.body.input;
  console.log(req.body.input,'*********')
  const url = `https://libraries.io/api/NPM/${npmModule}?api_key=9d6daf8cc3a087418203a84deaf6164d`;
  nodefetch(url).then(res => res.json())
    .then(resp => {
      // console.log(resp.description)
      res.render("home", {
        result: resp.description
      })
    })
    .catch(err => console.log(err));
};
