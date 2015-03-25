var mainModel = require('./model');

module.exports.indexPage = function(req, res) {

      res.render('index');
};

module.exports.getArticleList = function(req, res){
    mainModel.getArticleList({release:1},{title:1,cover:1,summary:1},{created:-1}, +req.query.offset, +req.query.limit,function(err, listInfo){
        if(err) return res.json({meta:{offset: +req.query.offset,limit: +req.query.limit,total:0,length:0,remaining:0},list:[]});
        res.json(listInfo);
    });
};