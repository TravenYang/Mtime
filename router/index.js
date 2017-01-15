/**
 * Created by Traven on 2017/1/16.
 */
'use strict';
module.exports = function (app) {
    app.get('/', function *() {
        try {
            this.body = 'i am root-router!!!!!';
            console.log(this.status);
        } catch (e) {
            this.throw(500, e.stack);
        }
    });
    let allroutes = require('requireindex')(__dirname);
    for (let key in allroutes) {
        allroutes[key](app);
    }
};