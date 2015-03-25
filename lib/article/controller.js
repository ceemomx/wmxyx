var tools = require('../tool/tool');
var articleModel = require('./model');

module.exports.submitArticle = function (req, res) {

    var insertObj = {
        _id: tools.generateUUID(26),
        title: req.body.title,
        cover: req.body.cover,
        summary: req.body.summary,
        main: req.body.main,
        created: Date.now(),
        type: req.body.type,
        visitedCount: 0,
        release:req.body.release
    };

    articleModel.insert(insertObj, function (err, data) {
        if (err) return res.send('failed');
        res.send('ok');
    })
};

module.exports.articleInfoPage = function(req, res){
    var articleID = req.params.id;
    articleModel.findOneByID(articleID, function(err, data){
        if(err) return res.send(404);
        if(!data.title) return res.send(404);
        res.render('info',data);
    })
};