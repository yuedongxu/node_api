/*
*建立数据库连接	
*/
var mysql = require('mysql');

var pool = mysql.createPool({
	host:'localhost',
	port:3306,
	database:'testdb',
	user:'root',
	password:'123456'
})

exports.pool = pool;