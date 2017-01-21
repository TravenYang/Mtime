/**
 * Created by Traven on 2017/1/19.
 */
'use strict';
var http = require("http");
var fs = require("fs");
let co = require('co');
let mysql = require('./../models/mysql');
let repeat = ()=> {
    console.log('--------------------------------------一轮开始');
    co(function* getList() {
        let r = yield mysql.query('SELECT imageid,authorHead FROM commet WHERE authorHeadImg is null or authorHeadImg = "" LIMIT 1;');
        yield updatesrc(JSON.stringify(r));
        console.log('----------------------------------------一轮结束');
        repeat();
    });
};
repeat();
function* updatesrc(r) {
    let source = (JSON.parse(r))[0];
    let imageid = source.imageid;
    let url = source.authorHead;
    console.log(url);
    if(!url){
        yield mysql.query(`UPDATE commet SET authorHeadImg="NO URL" WHERE imageid=${imageid};`);
        console.log('更新数据完毕', 'imageid: ', imageid, '');
        repeat();
    }
    console.log(imageid, url);
    console.log("http start");
    http.get(url, function (res) {
        var imgData = "";
        res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
        res.on("data", function (chunk) {
            imgData += chunk;
        });
        res.on("end", function () {
            fs.writeFile(`./static/image/${imageid}.jpg`, imgData, "binary", function (err) {
                if (err) {
                    console.log("down fail");
                    console.log(err);
                }
                console.log("down success");
            });
        });
    });
    yield mysql.query(`UPDATE commet SET authorHeadImg="${imageid}.jpg" WHERE imageid=${imageid};`);
    console.log('更新数据完毕', 'imageid: ', imageid, '');
}


