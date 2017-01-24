/**
 * Created by Traven on 2017/1/15.
 */
'use strict';
let mysql = require('../models/mysql');
module.exports = function (app) {
    app.get('/mtime/list_home/',function*(){
        try{
            console.log('query',this.query);
            let number = this.query.number || 10;
            let page = this.query.page*number || 0;
            let type = this.query.type || 'now';
            let sortSql = `select * FROM movieInfo WHERE type='${type}' ORDER BY playTime LIMIT ${page},${number};`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        }catch(e){
            console.log(e.toString());
        }
    });

};