var express = require('express');
var router = express.Router();
var recommendController = require('./controller');

router.get('/slider', recommendController.getSlider);

module.exports = router;