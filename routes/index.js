var indexPageRouter = require('../lib/main/router');
var adminPageRouter = require('../lib/admin/router');
var articlePageRouter = require('../lib/article/router');
var fileRouter = require('../lib/file/router');
var recommendRouter = require('../lib/recommend/router');
var path = require('path');
var ueditor = require("ueditor");

module.exports = function(app){

    app.use('/',indexPageRouter);
    app.use('/admin', adminPageRouter);
    app.use('/article', articlePageRouter);
    app.use('/file', fileRouter);
    app.use('/recommend', recommendRouter);

};
