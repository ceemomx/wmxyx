var fileModel = require('./model');
var fs = require('fs');
var tool = require('../tool/tool');

module.exports.saveFile = function (req, res) {
    if (!req.files.image) return res.send(400);
    var id = tool.generateUUID(24);
    fs.readFile(req.files.image.path, function (err, data) {
        if (err) return res.send(400);
        var buffer = new Buffer(data, 'binary').toString('base64');
        fileModel.saveFile(id, buffer, function (err) {
            fs.unlink(req.files.image.path,function(){});
            if (err) return res.send({status: -1});
            res.send({status: 1, id: id})
        })
    })
};

module.exports.readFile = function(req, res){
  var id = req.params.id;
    fileModel.readFile(id, function(err, data){
        if (req.headers['if-modified-since'] && req.headers['if-modified-since'] >= Date.now()) {
            res.send(304);
        } else {
            res.set('Cache-Control', 'max-age=86400, public');
            res.set('Expires', new Date(Date.now() + 86400000).toUTCString());
            res.set('Last-Modified', Date.now() + 86400000);
            res.type('png');
            res.end(data.data, 'base64');
        }
    })
};