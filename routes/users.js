var express = require('express');
var router = express.Router();
var users = require('../api/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res){
    var params = req.body;
    if (params.userName == "" || params.userName == null) {
        responseData.code = 1;
        responseData.message = "请输入用户名"
        res.json(responseData);
        return;
    }
    if (params.password == "" || params.password == null) {
        responseData.code = 2;
        responseData.message = "请输入密码"
        res.json(responseData);
        return;
    }

    // let userPwd = md5Pwd(params.password);
    users.login([params.userName, params.password], function (err, result) {
        if (err) {
        }
        if (result == "" || result == null) {
            responseData.code = 3;
            responseData.message = "用户名或密码错误"
            res.json(responseData);
            return;
        } else {
            responseData.code = 4;
            responseData.message = "登录成功";
            res.json(responseData);
            return;
        }
    })
} );

module.exports = router;
