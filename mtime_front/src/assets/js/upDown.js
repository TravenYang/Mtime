/**
 * Created by Traven on 2017/2/7.
 */
//传入iscroll实例 _this,up.down 为对应的回调函数
function fetchMore(_this,up,down){
  let pullDownFlag,pullUpFlag,timer;
  _this.myscroll.on('scroll', positionJudge);
  _this.myscroll.on('scrollEnd', action);
  function positionJudge() {
    //判断下拉
    if (this.y > 40) {
      //console.log( "放开刷新页面");
      pullDownFlag = 1;
      clearTimeout(timer);
      //判断上拉
    } else if (this.y < (this.maxScrollY - 60)) {
      //console.log( "放开刷新页面");
      pullUpFlag = 1;
      clearTimeout(timer);
    }
  }
  function action(){
    //利用定时器,控制scrollend触发频率
    timer = setTimeout(function(){
      if(pullDownFlag==1){
        //pullDownAction();
        if(down){
          _this.page =0;
          down(_this);
        }
        console.log('我下拉刷新了');
        pullDownFlag = 0;

      }else if(pullUpFlag==1){
        //pullUpAction();
        if(up){
          up(_this);
        }
        console.log('我上拉加载了');
        pullUpFlag = 0;
      }
    },200);
  }
}
export default {fetchMore};
