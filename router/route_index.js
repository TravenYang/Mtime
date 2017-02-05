/**
 * Created by Traven on 2017/1/15.
 */
'use strict';
let mysql = require('../models/mysql');
module.exports = function (app) {
    //获取电影信息数据
    app.get('/mtime/list_home/', function*() {
        try {
            console.log('query', this.query);
            let number = this.query.number || 10;
            let page = this.query.page * number || 0;
            let type = this.query.type || 'now';
            let sortSql = `select * FROM movieInfo WHERE type='${type}' ORDER BY playTime LIMIT ${page},${number};`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //查询一条电影数据
    app.get('/mtime/list_now_one/', function*() {
        try {
            console.log('query', this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM movieInfo WHERE movieId='${movieId}' ORDER BY playTime LIMIT 1;`;
            let r = yield mysql.query(sortSql);
            console.log(r);
            this.body = r;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //查询演员图片
    app.get('/mtime/list_actor_image/', function*() {
        try {
            console.log('query actor', this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM actor WHERE movieId='${movieId}' LIMIT 2;`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //查询剧照
    app.get('/mtime/list_movie_image/', function*() {
        try {
            console.log('query image', this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM movieImage LIMIT 4;`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //获取评论
    app.get('/mtime/list_movie_commet/', function*() {
        try {
            console.log('query commet', this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM commet WHERE movieId='${movieId}' LIMIT 10;`;
            let r = yield mysql.query(sortSql);
            if (r[0] == undefined) {
                sortSql = `select * FROM commet LIMIT 10;`;
                r = yield mysql.query(sortSql);
            }
            console.log('commet', r);
            this.body = r;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //获取场次
    app.get('/mtime/list_movie_time/', function*() {
        try {
            console.log('query commet', this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM time WHERE movieId='${movieId}' LIMIT 10;`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //获取座位
    app.get('/mtime/list_movie_seat/', function*() {
        try {
            console.log('query seat', this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM seat WHERE movieId='${movieId}'`;
            let r = yield mysql.query(sortSql);
            let seat = JSON.parse(r[0].seat);
            let emptySeat = countSeat(seat);
            r[0].emptySeat = emptySeat;
            this.body = r;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //更新座位信息
    app.post('/mtime/update_movie_seat', function*() {
        try {
            console.log('进来了');
            let a = this.request.body;
            //console.log(a);
            //console.log('query seat', this.request);
            //console.log(this.req.body);
            let movieId = a.seat;
            console.log(a.seat);
            //let seat = this.request.body.seat;
            //console.log(seat);
            //console.log(movieId);
            //let sortSql = `UPDATE seat SET seat = ${data} WHERE movieId='${movieId}'`;
            //let r = yield mysql.query(sortSql);
            //let seat = JSON.parse(r[0].seat);
            //let emptySeat = countSeat(seat);
            //console.log(emptySeat);
            //r[0].emptySeat = emptySeat;
            this.body = 1;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //计算空座
    function countSeat(seat) {
        let emptySeat = 0;
        for (let rowId = 0, rowLen = seat.length; rowId < rowLen; rowId++) {
            for (let colId = 0, colLen = seat[rowId].length; colId < colLen; colId++) {
                if (seat[rowId][colId].select == 0 && seat[rowId][colId].tempSelect == 0 && seat[rowId][colId].seatNull == 0) {
                    emptySeat++;
                }
            }
        }
        return emptySeat;
    }
};