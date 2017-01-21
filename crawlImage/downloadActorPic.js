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
        let r = yield mysql.query('SELECT imageId,actorImgSrc,actorImgRoleSrc FROM actor WHERE actorImg is null or actorImg = "" LIMIT 1;');
        yield updatesrc(JSON.stringify(r));
        console.log('----------------------------------------一轮结束');

    });
};
repeat();
function* updatesrc(r) {
    let source = (JSON.parse(r))[0];
    let imageId = source.imageId;
    let url1 = source.actorImgSrc;
    let url2 = source.actorImgRoleSrc;
    console.log(url1,url2);
    if(!url1){
        yield mysql.query(`UPDATE actor SET actorImg="NO URL" WHERE imageId=${imageId};`);
        console.log('no url1', 'imageid: ', imageId, '');
        repeat();
    }else{
        yield getHttp(imageId,url1,'actorImg');
        if(!url2){
            yield mysql.query(`UPDATE actor SET actorImgRole="NO URL" WHERE imageId=${imageId};`);
            console.log('no url2', 'imageId: ', imageId);
            repeat();
        }else{
            yield getHttp(imageId,url2,'actorImgRole');
            repeat();
        }
    }

}
function *getHttp(imageId,url,type){
    console.log(imageId, url);
    console.log("http start");
    http.get(url, function (res) {
        var imgData = "";
        res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
        res.on("data", function (chunk) {
            imgData += chunk;
        });
        res.on("end", function () {
            fs.writeFile(`./static/image/${type}${imageId}.jpg`, imgData, "binary", function (err) {
                if (err) {
                    console.log("down fail");
                    console.log(err);
                }
                console.log("down success");
            });
        });
    });
    yield mysql.query(`UPDATE actor SET ${type}="${imageId}.jpg" WHERE imageId=${imageId};`);
    console.log('更新数据完毕', 'imageId: ', imageId);
}

