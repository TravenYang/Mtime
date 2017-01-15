/**
 * Created by Traven on 2017/1/15.
 */
'use strict';
let Config = require('./config_mtime');
let koa = require('koa');
let app = koa();
let staticServer = require('koa-static');
let path = require('path');
let middlewares = require('koa-middlewares');
app.use(middlewares.router(app));
require('./router')(app);
app.use(function *(next) {
    yield next;
    switch (this.status) {
        case 200:
            break;
        case 204:
            this.throw(204, 'sys:无内容返回');
            break;
        case 405:
            this.throw(this.throwCode(405, 'sys:无访问api权限'));
            break;
        case 404:
            this.throw(404, 'sys:无此api');
            break;
        default:
            this.throw(this.status, 'sys:服务端未知错误');
    }
});
app.use(staticServer(path.join(__dirname, 'static')));
app.listen(Config.dev.mtime.port);
require('figlet').text('Mtime', {
    font: 'Roman'
}, function (err, data) {
    if (err) {
        return;
    }
    console.log(data);
    console.log('listen at:' + Config.dev.mtime.port);
});

