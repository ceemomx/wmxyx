var express = require('express');
var router = express.Router();
var articleController = require('./controller');

router.post('/submit',articleController.submitArticle);

module.exports = router;