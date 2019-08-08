const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const router = require('./controllers');

const app = express();

const port = process.env.PORT || 5000;
app.set('port', port);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views', 'partials'),
  }),
);

app.use(router);


module.exports = app;
