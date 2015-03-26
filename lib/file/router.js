var express = require('express');
var router = express.Router();
var fileController = require('./controller');

router.post('/upload', fileController.saveFile);
router.get('/image/:id/', fileController.readFile);

module.exports = router;