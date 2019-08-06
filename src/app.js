const express = require('express');
const exphbs = require('express-handlebars');
const nodefetch = require('node-fetch');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
  })
)

app.get('/', (req, res) => {
  res.render("home")
})

app.post('/search', (req, res) => {
  const npmModule = req.body.inputValue;
  const url = `https://libraries.io/api/NPM/${npmModule}?api_key=9d6daf8cc3a087418203a84deaf6164d`;
  nodefetch(url)
    .then(res => res.json())
    .then(res => console.log(res.description))
    .catch(err => console.log(err));


})


module.exports = app;
