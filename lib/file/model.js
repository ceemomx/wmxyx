var db = require('../tool/db');
var fileDb = db.getCollection('file');

module.exports.saveFile = function (id, data, callback) {
    var insertObj = {
        _id: id,
        data: data
    };
    fileDb.insert(insertObj, callback)
};

module.exports.readFile = function (id, callback) {
    fileDb.findOne({_id: id}, callback)
};