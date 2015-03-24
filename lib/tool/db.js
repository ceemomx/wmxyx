var mongo = require('mongoskin');
var db = mongo.db('mongodb://127.0.0.1:27017/wmxyx', {native_parser:true});

db.getCollection = function (collectionName) {
    return db.collection(collectionName);
};

module.exports = db;