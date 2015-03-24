var db = require('../tool/db');
var articleDb = db.getCollection('article');

module.exports.getArticleList = function (query, fields, sort, offset, limit, callback) {
  articleDb.find(query,fields).sort(sort).skip(+offset).limit(+limit).toArray(function(err,list){
      if(err) return callback(err);
      articleDb.count(query, function(err, count){
          callback(err, {
              meta: {
              offset: (+offset || 0),
              limit: (+limit || 0),
              total: count,
              length: list.length,
              remaining: count - (+offset || 0) - list.length
          }, list: list});
      })
  })
};

