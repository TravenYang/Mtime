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
        let r = yield mysql.query('SELECT imageId,movieImageSrc FROM movieImage WHERE movieImage is null or movieImageSrc = "" LIMIT 1;');
        yield updatesrc(JSON.stringify(r));
        console.log('----------------------------------------一轮结束');
        repeat();
    });
};
repeat();
function* updatesrc(r) {
    let source = (JSON.parse(r))[0];
    let imageId = source.imageId;
    let url = source.movieImageSrc;
    console.log(url);
    if(!url){
        yield mysql.query(`UPDATE movieImage SET movieImage="NO URL" WHERE imageId=${imageId};`);
        console.log('更新数据完毕', 'imageId: ', imageId, '');
        repeat();
    }
    console.log(imageId, url);
    console.log("http start");
    http.get(url, function (res) {
        var imgData = "";
        res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
        res.on("data", function (chunk) {
            imgData += chunk;
        });
        res.on("end", function () {
            fs.writeFile(`./static/image/${imageId}.jpg`, imgData, "binary", function (err) {
                if (err) {
                    console.log("down fail");
                    console.log(err);
                }
                console.log("down success");
            });
        });
    });
    yield mysql.query(`UPDATE movieImage SET movieImage="${imageId}.jpg" WHERE imageId=${imageId};`);
    console.log('更新数据完毕', 'imageId: ', imageId, '');
}


