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

module.exports.deleteByID = function (articleId, callback) {
    articleDb.remove({_id: articleId}, callback)
};

module.exports.editByID = function (articleID, editField, callback) {
    articleDb.findAndModify({_id: articleID}, {}, {$set: editField}, {new: true}, callback)
};