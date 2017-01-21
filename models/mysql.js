//mysql链接
var Config = require('../config_mtime');
var mysqlWrapper = require('co-mysql'),
	Mysql = require('mysql');
var pool = Mysql.createPool(Config.dev.mysql_mtime),
	mysql = mysqlWrapper(pool);
/*  mysql.query("show tables",function(err,data){
  	console.log("mysql tables count:",data.length); 
  })*/
var firstRun = 1;
pool.on('connection', function() {
	if(firstRun) {
		console.log('Mysql:'+Config.dev.mysql_mtime.host+':'+Config.dev.mysql_mtime.port+'pool connect!');
		firstRun = 0;
	}
});
/*pool.on('enqueue', function() {
	$.log('<-- Mysql pool enqueue!');
});*/

module.exports = mysql;