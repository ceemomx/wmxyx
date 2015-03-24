var indexPageRouter = require('../lib/main/router');

module.exports = function(app){

    app.use('/',indexPageRouter);

};
