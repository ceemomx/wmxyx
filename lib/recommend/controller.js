var recommendModel = require('./model');

module.exports.getSlider = function (req, res) {
    recommendModel.getRecommendByTypeAndRelease('slider', 1, 10, function (err, data) {
        if(err) return res.send([]);
        res.send(data);
    })
};