var mainModel = require('./model');

module.exports.indexPage = function (req, res) {

    res.render('index');
};

module.exports.getArticleList = function (req, res) {
    var query = {
        release: 1
    };
    if (req.query.type == 'all') {
        query.type = 'all'
    } else if (req.query.type == 'china') {
        query.type = 'china'
    }
    mainModel.getArticleList(query, {title: 1, cover: 1, summary: 1, created:1, visitedCount:1}, {created: -1}, +req.query.offset, +req.query.limit, function (err, listInfo) {
        if (err) return res.json({meta: {offset: +req.query.offset, limit: +req.query.limit, total: 0, length: 0, remaining: 0}, list: []});
        res.json(listInfo);
    });
};

module.exports.articleListPage = function (req, res) {
    var type = req.params.type;
    res.render('list', {type: type});
};