<template>
  <div class="ticket">
      <TicketItem v-for="(item,index) in cinema" :info="item" @click.native='goto(item.name)'></TicketItem>
  </div>
</template>

<script type="text/ecmascript-6">
  import TicketItem from 'components/ticketItem/TicketItem';
  import gaoDeAxios from 'axios';
  import {mapGetters,mapActions} from 'vuex';
  export default{
    components: {
      TicketItem
    },
    methods: {
      ...mapActions([
        'hideNavAndSearch',
      ]),
      goto(name){
        this.$router.push({path:'/ticket/choose_movie',query:{name:name}});
        this.hideNavAndSearch();
        document.body.scrollTop = 0;
      }
    },
    data(){
      return {
        cinema: []
      }
    },
    mounted(){
      //key
      //35d76866a498d51fa701a70f7100099a
      //判断浏览器支持
      let _this = this;
      if (window.navigator.geolocation) {
        //调用getCurrentPosition方法
        window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
          enableHighAccuracy: true
        });
      } else {
        console.log("浏览器不支持html5来获取地理位置信息");
      }
      function handleSuccess(position) {
        //经纬度
        var lng = Math.round(position.coords.longitude * 1000000) / 1000000;
        var lat = Math.round(position.coords.latitude * 1000000) / 1000000;
        console.log(position);
        alert(lng);
        alert(lat);
        let pos = 121.034372 + ',' + 31.1372824;
        //let pos = lng+','+lat;
        gaoDeAxios.get('http://restapi.amap.com/v3/geocode/regeo', {
          params: {
            output: 'json',
            location: pos,
            key: '35d76866a498d51fa701a70f7100099a',
            radius: 1000,
            extensions: 'all'
          }
        }).then(function (res) {
          console.log(res.data);
          alert(res.data.regeocode.addressComponent.province);
          alert(res.data.regeocode.addressComponent.district);
          alert(res.data.regeocode.formatted_address);
          getCinema(pos);

        }).catch(function (err) {
          console.log('err', err);
        });
      };
      function getCinema(pos) {
        gaoDeAxios.get('http://restapi.amap.com/v3/place/around', {
          params: {
            output: 'json',
            location: pos,
            key: '35d76866a498d51fa701a70f7100099a',
            extensions: 'all',
            radius: 10000,
            types: '电影院'
          }
        }).then(function (res) {
          console.log(res.data.pois);
          _this.cinema = res.data.pois;
          find.innerHTML = res.data.pois;
        }).catch(function (err) {
          console.log('err', err);
        });
      }

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
        alert(result);
      }
    }
  };
</script>

<style lang="scss">

</style>
