/**
 * Created by Traven on 2017/2/7.
 */
//传入iscroll实例 _this
function fetchMore(_this){
  let pullDownFlag,pullUpFlag;
  _this.myscroll.on('scroll', positionJudge);
  _this.myscroll.on('scrollEnd', action);
  function positionJudge() {
    //判断下拉
    console.log( "2222353532");
    if (this.y > 40) {
      console.log( "放开刷新页面");
      pullDownFlag = 1;
      //判断上拉
    } else if (this.y < (this.maxScrollY - 40)) {
      console.log( "放开刷新页面");
      pullUpFlag = 1;
    }
  }
  function action(){
    console.log(5315234);
    if(pullDownFlag==1){
      //pullDownAction();
      console.log('我下拉刷新了');
      pullDownFlag = 0;
    }else if(pullUpFlag==1){
      //pullUpAction();
      console.log('我上拉加载了');
      pullUpFlag = 0;
    }
  }
}
export default {fetchMore};
