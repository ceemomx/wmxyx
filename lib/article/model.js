var db = require('../tool/db');
var articleDb = db.getCollection('article');

module.exports.insert = function (articleInfo, callback) {
    articleDb.insert(articleInfo, function (err, data) {
        callback(err, data[0]);
    })
};

module.exports.findOneByID = function (articleId, callback) {
    articleDb.findOne({_id: articleId}, callback);
};