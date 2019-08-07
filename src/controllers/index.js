const { clientError, serverError } = require("./error");
const { getData } = require("./request");

const express = require("express");
const router = express.Router();

router.post("/search", getData);
router.use(clientError);
router.use(serverError);

module.exports = router;
