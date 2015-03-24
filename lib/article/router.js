var express = require('express');
var router = express.Router();
var articleController = require('./controller');

router.post('/submit',articleController.submitArticle);
router.get('/info/:id', articleController.articleInfoPage);
module.exports = router;