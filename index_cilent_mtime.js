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
let bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(function*(next){
    yield next;
    this.set('Access-Control-Allow-Origin','*');
});
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
app.use(staticServer(path.join(__dirname, 'dist')));

////本地

let serverIp = '192.168.1.5';

//服务器

//let serverIp = '45.32.73.184';

app.listen(Config.dev.mtime.port,serverIp);

require('figlet').text('Mtime', {
    font: 'Roman'
}, function (err, data) {
    if (err) {
        return;
    }
    console.log(data);
    console.log(`listen at: ${serverIp}:${Config.dev.mtime.port}`);
});

