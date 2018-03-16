var mysql = require('../config/mysql');//获取数据库连接
var user_api = function(){};
module.exports = user_api;

user_api.login = function(params,callback){
	mysql.pool.getConnection(function(err,connection){
		if(err){
			console.log("失败");
			return;
		}else{
			console.log("成功");
			var sql = "select * from user where userName = ? and password = ?";
			connection.query(sql,params,function(err,content){
				if(err){
					return
				}else{
					callback(content)
				}
			})
		}
		connection.release();//释放连接池
	})
}