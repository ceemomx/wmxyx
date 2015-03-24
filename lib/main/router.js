var express = require('express');
var router = express.Router();
var mainController = require('./controller');

router.get('/', mainController.indexPage);

module.exports = router;