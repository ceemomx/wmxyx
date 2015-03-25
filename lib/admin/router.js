var express = require('express');
var router = express.Router();
var articleController = require('../article/controller');
var articleModel = require('../article/model');
var mainModel = require('../main/model');

router.get('/', function (req, res) {
    if (req.cookies.name == 'aaa' && req.cookies.password == 'bbb') {
        res.render('admin_index');
    } else {
        res.redirect('/admin/login');
    }
});

router.get('/login', function (req, res) {
    res.render('admin_login')
});

router.post('/login', function (req, res) {
    if (req.body.name == 'aaa' && req.body.password == 'bbb') {
        res.cookie('name', 'aaa', {maxAge: 900000});
        res.cookie('password', 'bbb', {maxAge: 900000});
        res.send({status: '1'});
    } else {
        res.send({status: '0'});
    }
});

router.get('/add', function (req, res) {
    res.render('admin_add')
});

router.get('/list', function (req, res) {
    res.render('admin_list')
});
router.post('/list', function (req, res) {
    mainModel.getArticleList({}, {title: 1, created: 1}, {created: -1}, 0, 0, function (err, list) {
        if (err) return res.send(404);
        res.json(list);
    })
});

router.post('/:id/delete', function (req, res) {
    articleModel.deleteByID(req.params.id, function (err) {
        if (err) return res.send({status: -1});
        res.send({status: 1});
    })
});

router.get('/:id/edit', function (req, res) {
    articleModel.findOneByID(req.params.id, function (err, data) {
        if (err) return res.send(404);
        data.release = data.release || 0;
        res.render('admin_edit', data);
    })
});

router.post('/:id/edit', function (req, res) {
    var editField = {
        title: req.body.title,
        main: req.body.main,
        type: req.body.type,
        cover: req.body.cover,
        summary: req.body.summary,
        release: +req.body.release
    };
    articleModel.editByID(req.params.id,editField, function(err, data){
        if(err) return res.send('failed');
        res.send('ok');
    })
});


module.exports = router;