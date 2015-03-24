var indexPageRouter = require('../lib/main/router');
var adminPageRouter = require('../lib/admin/router');

module.exports = function(app){

    app.use('/',indexPageRouter);
    app.use('/admin', adminPageRouter);
};
