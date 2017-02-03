<template>
  <div class="find" style="height:600px">
    <div id='find' style="height:600px"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import AMap from 'AMap';
  export default{
    mounted(){
      var map = new AMap.Map("find", {
        resizeEnable: true
      });
      AMap.service(["AMap.PlaceSearch"], function () {
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
          pageSize: 15,
          type: '电影院',
          pageIndex: 1,
          map: map
        });
        //中心点坐标
        console.log('down');
        var cpoint = [121.034372, 31.1372824];
        placeSearch.searchNearBy('', cpoint, 10000, function (status, result) {
            console.log(status,result);
        });
      });
    }
  }
</script>

<style lang="scss">


</style>
