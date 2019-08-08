const express = require('express');
const { clientError, serverError } = require('./error');
const { getData } = require('./request');
const { home } = require('./home');

const router = express.Router();

router.get('/', home);
router.post('/search', getData);
router.use(clientError);
router.use(serverError);

module.exports = router;
