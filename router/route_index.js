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
            let o = this.request.body;
            let movieId = o.movieId;
            let seat = o.seat;
            console.log(movieId);
            console.log(seat);
            let sortSql = `select * FROM seat WHERE movieId='${movieId}';`;
            let r = yield mysql.query(sortSql);
            let seatInSql = JSON.parse(r[0].seat);
            for (let i = 0, l = seat.length; i < l; i++) {
                for (let k in seat[i]) {
                    let row = seat[i][k].row - 1;
                    let colum = seat[i][k].colum - 1;
                    seat[i][k].confirm = 1;
                    seat[i][k].select = 0;
                    console.log(row, colum);
                    console.log(seatInSql[row][colum]);
                    seatInSql[row][colum] = seat[i][k];
                    console.log('seatInSql[row][colum]', seatInSql[row][colum]);

                }
            }
            let a = JSON.stringify(seatInSql);
            let update = `UPDATE seat SET seat = '${a}' WHERE movieId='${movieId}';`;
            let down = yield mysql.query(update);
            this.body = 'update down';
        } catch (e) {
            console.log(e.toString());
        }
    });
    //login
    app.post('/mtime/login', function*() {
        try {
            console.log('登录');
            let o = this.request.body;
            let account = o.account;
            let pwd = o.pwd;
            let userInfo = `select * FROM user WHERE account='${account}';`;
            let r = yield  mysql.query(userInfo);
            let loginStatus = {};
            if (r[0]) {
                let serPwd = r[0].pwd;
                if (serPwd == pwd) {
                    loginStatus.status = true;
                    loginStatus.account = account;
                    loginStatus.name = r[0].name;
                } else {
                    loginStatus.status = false;
                    loginStatus.msg = '密码不正确';
                }
            } else {
                loginStatus.status = false;
                loginStatus.msg = '账号不存在';

            }
            this.body = loginStatus;
        } catch (e) {
            console.log(e.toString());
        }
    });
    //register
    app.post('/mtime/register', function*() {
            try {
                console.log('注册');
                let o = this.request.body;
                let account = o.account;
                let name = o.name;
                let pwd = o.pwd;
                console.log(account);
                console.log(name);
                console.log(pwd);
                let searchAccount = `select * FROM user WHERE account='${account}';`;
                let searchName = `select * FROM user WHERE account='${name}';`;
                let sName = yield  mysql.query(searchName);
                let sAccount = yield  mysql.query(searchAccount);
                let registerInfo = {};
                if (sAccount[0]) {
                    registerInfo.msg = '账号已存在';
                    registerInfo.status = false;
                } else if (sName[0]) {
                    registerInfo.msg = '昵称已存在';
                    registerInfo.status = false;
                } else {
                    let userInfo = `INSERT INTO user SET account='${account}',name='${name}',pwd='${pwd}';`;
                    let r = yield  mysql.query(userInfo);
                    registerInfo.msg = '注册成功';
                    registerInfo.status = true;
                }
                this.body = registerInfo;
            }
            catch
                (e) {
                console.log(e.toString());
            }
        }
    )
    ;


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
}
;