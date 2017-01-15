/**
 * Created by Traven on 2017/1/15.
 */
'use strict';
module.exports = function(app){
  app.get('/a',function *(){
      try{
         this.body = 'i am aaaaaa!!!!!';
      }catch(e){
          this.throwCode(500, e.stack);
      }
  });
};