var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    if(req.cookies.name == 'aaa' && req.cookies.password == 'bbb'){
        res.send('ok')
    }else{
        res.redirect('/admin/login')
    }
});

router.get('/login', function(req, res){
    res.render('admin_login')
});

router.post('/login', function(req, res){
    if(req.body.name == 'aaa' && req.body.password == 'bbb'){
        res.cookie('name','aaa',{secure: true,maxAge: 900000});
        res.cookie('password','bbb',{secure: true,maxAge: 900000});
        res.send({status:'1'});
    }else{
        res.send({status:'0'});
    }
});

module.exports = router;