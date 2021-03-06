var express = require('express');
var router = express.Router();
var mainController = require('./controller');

router.get('/', mainController.indexPage);
router.get('/articles', mainController.getArticleList);
router.get('/class/:type', mainController.articleListPage);
module.exports = router;