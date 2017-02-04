/**
 * Created by Traven on 2017/1/15.
 */
'use strict';
let mysql = require('../models/mysql');
module.exports = function (app) {
    //获取电影信息数据
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
    //查询一条电影数据
    app.get('/mtime/list_now_one/',function*(){
        try{
            console.log('query',this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM movieInfo WHERE movieId='${movieId}' ORDER BY playTime LIMIT 1;`;
            let r = yield mysql.query(sortSql);
            console.log(r);
            this.body = r;
        }catch(e){
            console.log(e.toString());
        }
    });
    //查询演员图片
    app.get('/mtime/list_actor_image/',function*(){
        try{
            console.log('query actor',this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM actor WHERE movieId='${movieId}' LIMIT 2;`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        }catch(e){
            console.log(e.toString());
        }
    });
    //查询剧照
    app.get('/mtime/list_movie_image/',function*(){
        try{
            console.log('query image',this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM movieImage LIMIT 4;`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        }catch(e){
            console.log(e.toString());
        }
    });
    //获取评论
    app.get('/mtime/list_movie_commet/',function*(){
        try{
            console.log('query commet',this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM commet WHERE movieId='${movieId}' LIMIT 10;`;
            let r = yield mysql.query(sortSql);
            if(r[0] == undefined){
                sortSql = `select * FROM commet LIMIT 10;`;
                r = yield mysql.query(sortSql);
            }
            console.log('commet',r);
            this.body = r;
        }catch(e){
            console.log(e.toString());
        }
    });
    //获取场次
    app.get('/mtime/list_movie_time/',function*(){
        try{
            console.log('query commet',this.query);
            let movieId = this.query.movieId;
            let sortSql = `select * FROM time WHERE movieId='${movieId}' LIMIT 10;`;
            let r = yield mysql.query(sortSql);
            this.body = r;
        }catch(e){
            console.log(e.toString());
        }
    });

};