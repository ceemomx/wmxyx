var db = require('../tool/db');
var articleDb = db.getCollection('article');

module.exports.insert = function (articleInfo, callback) {
    articleDb.insert(articleInfo, function (err, data) {
        callback(err, data[0]);
    })
};