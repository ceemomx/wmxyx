var express = require('express');
var router = express.Router();
var recommendController = require('./controller');

router.get('/slider', recommendController.getSlider);
router.get('/rank', recommendController.getRank);

module.exports = router;