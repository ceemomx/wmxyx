var recommendModel = require('./model');
var mainModel = require('../main/model');

module.exports.getSlider = function (req, res) {
    recommendModel.getRecommendByTypeAndRelease('slider', 1, 10, function (err, data) {
        if(err) return res.send([]);
        res.send(data);
    })
};

module.exports.getRank = function(req, res){
    var sort = {};
    if(req.query.type == 'new'){
        sort.created = -1;
    }else{
        sort.visitedCount = -1;
    }
    mainModel.getArticleList({},{title:1,cover:1},sort,0,10,function(err, list){
        console.log(err,list);
        if(err) return res.send({list:[]});
        res.send(list);
    })
};