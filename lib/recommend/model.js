var db = require('../tool/db');
var rmDB = db.getCollection('recommend');

//data = {
//    _id:'indexID',
//    title:'title',
//    url:'url',
//    type:'slider',
//    weight:4,
//    describe:'describe',
//    img:'base64',
//    release:1,
//    created:Date.now(),
//    target:'id'
//};

module.exports.createRecommend = function (insertObj, callback) {
    rmDB.insert(insertObj, function (err, data) {
        if (err) return callback(err);
        callback(err, data[0])
    })
};

module.exports.modifyRecommend = function (queryObj, modifyObj, callback) {
    rmDB.findAndModify(queryObj, {}, {$set: modifyObj}, {new: true}, callback)
};

module.exports.deleteRecommendByID = function (id, callback) {
    rmDB.remove({_id: id}, callback)
};

module.exports.getRecommendByTypeAndRelease = function (type, release, limit, callback) {
    rmDB.find({type: type, release: release}).sort({weight: -1}).limit(limit).toArray(callback)
};

module.exports.getRecommendList = function (query, offset, limit, callback) {
    rmDB.find(query).skip(+offset).limit(+limit).toArray(function (err, data) {
        if (err) return callback(err);
        rmDB.count(query, function (err, count) {
            callback(err, {meta: {
                offset: +offset,
                limit: +limit,
                total: count,
                length: data.length,
                remaining: count - (+offset || 0) - data.length
            }, list: data})
        })
    })
};