/**
 * Created by Traven on 2017/1/15.
 */
'use strict';
let mysql = require('../models/mysql');
module.exports = function (app) {
    app.get('/mtime/list',function*(){
        try{
            let sortSql = `SELECT * FROM commet;`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        }catch(e){
            console.log(e.toString());
        }
    });
};