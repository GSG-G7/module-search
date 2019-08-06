const express = require('express');

const app = express();

const port = process.env.PORT || 5000;
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
