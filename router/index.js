/**
 * Created by Traven on 2017/1/16.
 */
'use strict';
let _ = require('lodash');
let mysql = require('../models/mysql');
module.exports = function (app) {
    app.get('/', function *() {
        try {
            let r = {
                method: 'get',
                header: this.header,
                query: this.query,
                mysql_info: _.toArray(_.mapValues(yield mysql.query('show tables;'),'Tables_in_mtime'))
            };
            this.body = r;
        } catch (e) {
            this.throw(500, e.stack);
        }
    });
    let allroutes = require('requireindex')(__dirname);
    for (let key in allroutes) {
        allroutes[key](app);
    }
};