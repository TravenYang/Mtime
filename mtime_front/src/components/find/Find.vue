<template>
  <div class="find" style="height:600px">
    <div id='find' style="height:600px"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import AMap from 'AMap';
  import gaoDeAxios from 'axios';
  import {mapGetters,mapActions} from 'vuex';
  export default{
    computed: {
      ...mapGetters([
        'getCurrentLocation'
      ])
    },
    methods: {
      ...mapActions([
        'saveCurrentLocation'
      ])
    },
    mounted(){
      let _this = this;
      let map = new AMap.Map("find", {
        resizeEnable: true
      });
      //获取地理信息
      if (window.navigator.geolocation) {
        //调用getCurrentPosition方法
        window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
          enableHighAccuracy: true
        });
      } else {
        console.log("浏览器不支持html5来获取地理位置信息");
      }
      //amap获取地址成功
      function handleSuccess(position) {
        clearTimeout(getDefaultNear);
        //经纬度
        let lng = Math.round(position.coords.longitude * 1000000) / 1000000;
        let lat = Math.round(position.coords.latitude * 1000000) / 1000000;
        //高德查找附近
        getNearby(lng,lat);
        console.log('我定位成功了');
      };
      //获取预设点附近信息
      let getDefaultNear = setTimeout(function(){
        console.log('未定位成功,进入预设地点');
        getNearby();
      },2000);
      //获取附近
      function getNearby(long,lati){
        //中心点坐标
        let lng = long ||  121.45209;
        let lat = lati || 31.228829;
        AMap.service(["AMap.PlaceSearch"], function () {
          let placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 15,
            type: '电影院',
            pageIndex: 1,
            map: map
          });
          let cpoint = [lng, lat];
          placeSearch.searchNearBy('', cpoint, 10000, function (status, result) {
            console.log(status, result);
            if (status == 'no_data') {
              //定位成功，但是没有周边数据,进入预设地点

              getNearby();
              console.log('定位成功，但是没有周边数据,进入预设地点');
            }
          });
        });
        _this.getCurrentLocation.lng = lng;
        _this.getCurrentLocation.lat = lat;
        _this.saveCurrentLocation(_this.getCurrentLocation);
        //获取地名
        let pos = lng + ',' + lat;
        getPlaceName(pos);
      }
      //获取地名
      function getPlaceName(pos){
        gaoDeAxios.get('http://restapi.amap.com/v3/geocode/regeo', {
          params: {
            output: 'json',
            location: pos,
            key: '35d76866a498d51fa701a70f7100099a',
            radius: 1000,
            extensions: 'all'
          }
        }).then(function (res) {
          _this.getCurrentLocation.place = res.data.regeocode.formatted_address;
          _this.saveCurrentLocation(_this.getCurrentLocation);
        }).catch(function (err) {
          console.log('err getPlaceName', err);
        });
      }
      //amap错误处理
      function handleError(error) {
        var result;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            result = "请打开您的定位系统";
            break;
          case error.POSITION_UNAVAILABLE:
            result = "暂时获取不到您的地点信息，请手动选择城市";
            break;
          case error.TIMEOUT:
            result = "连接超时";
            break;
          case error.UNKNOWN_ERROR:
            result = "发生了位置错误";
            break;
        }
        console.log('handelerr ticket', result);
      }
    }
  }
</script>

<style lang="scss">


</style>
