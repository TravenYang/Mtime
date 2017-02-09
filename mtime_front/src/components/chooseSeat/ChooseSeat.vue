<template>
  <div class="out_wraper">
    <div class="choose_seat_header">
      <div class="back" @click="gotoTicket"></div>
      <div class="header_text">
        <div class="movie_name">西游伏魔篇</div>
        <div class="movie_type">3D中文</div>
      </div>
    </div>
    <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
  <div  v-show="show" class="choose_seat animated">

    <div class="seat_cnt">
      <div class="screen_cnt">
        <div class="screen">
          <p class="screen_pic"></p>
          3号厅 银幕
          <div class="seat_rest">（剩余{{emptySeat}}个座位）</div>
          <div class="zoom"></div>
        </div>
      </div>
      <div class="seat_row_cnt">
        <ul class="seat_row_num">
          <li class="seat_row_num_item" v-for="(seatData,rowIdx) in seat">{{rowIdx+1}}</li>
        </ul>
        <ol class="seat_row_seat_cnt">
          <li class="seat_row_seat" v-for="(seatData,rowIdx) in seat">
            <span
              :class="['seat_row_seat_item',{seat_temp_select:+seatData.tempSelect},{select:+seatData.select},{confirm:+seatData.confirm},{seatnull:+seatData.seatNull}]"
              v-for="(seatData,colIdx) in seat[rowIdx]" @click="getSeatNum(+rowIdx,+colIdx)"></span>
          </li>
        </ol>
      </div>
    </div>
    <div class="seat_select_info">
      <span class="seat_movie_time">1月29日 (周日) 09:05</span>
      <span class="seat_time_change">更换场次</span>
      <div class="seat_movie_loacation">
        <div class="location">SFC上影影城（永华店）</div>
        <div class="price">单价：<i>{{price}}￥</i></div>
      </div>
      <ul class="seat_ticket_choose">
        <li class="seat_ticket_choose_item" v-for="ticket in chooseSeat">
          <span class="seat_ticket_cnt">
            <i class="seat_ticket" v-for="tik in ticket">{{tik.row}}排{{tik.colum}}座</i>
          </span>
        </li>
      </ul>
    </div>
    <div class="price_bar">
      <div class="left">
        <span class="price_cnt">总价:
          <b class="price">￥{{totalPrice}}</b>
          <i>(含服务费￥5/张)</i>
        </span>
      </div>
      <span class="price_confirm" @click="comfirmTicket">下一步</span>
    </div>
  </div>
    </transition>
    <loading v-show="loading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import qs from 'qs';
  import {mapGetters,mapActions} from 'vuex';
  import loading from 'components/loading/Loading'
  export default {
    data(){
      return {
        seat: '',
        seatNum: '',
        chooseSeat: [],//选中的座位
        emptySeat: '',
        price: 32,
        count: 0,
        loading: true,
        show:false,
      }
    },
    components:{
      loading
    },
    computed: {
      totalPrice(){
        return this.count * (5 + this.price);
      }
    },
    mounted(){
      let _this = this;
      _this.hideNavAndSearch();
      this.$http.get('/mtime/list_movie_seat/', {
        params: {
          movieId: 1
        }
      }).then(function (res) {
        _this.seat = JSON.parse(res.data[0].seat);
        _this.emptySeat = JSON.parse(res.data[0].emptySeat);
        //请求结束后,页面出现，loading消失
        _this.show = true;
        _this.loading = false;
      }).catch(function (err) {
        console.log('err seat', err);
      });
    },
    methods: {
      ...mapActions([
        'hideNavAndSearch'
      ]),
      gotoTicket(movieId){
        console.log('我来了');
        let _this = this;
        _this.$router.push({path:'/ticket/choose_movie', query:{movieId:movieId}});
      },
      getSeatNum(rowIdx, colIdx){
        let _this = this;
        //tempSelect 多用户并发选座的冲突问题，留待日后优化
        this.seatNum = (rowIdx + 1) + '排' + (colIdx + 1) + '座';
        console.log(this.seatNum);
        //colData 当前座位信息
        let colData = this.seat[rowIdx][colIdx];

        let lastIdx = this.seat[0].length - 1;
        console.log(lastIdx);
        //选座规则：不允许留下单个空座
        if (colIdx !== 0 && colIdx !== lastIdx) {//排除首尾两个座位后,就可以确保可以再当前座位加一减一
          let prevSeat_1 = this.seat[rowIdx][colIdx - 1];
          let nextSeat_1 = this.seat[rowIdx][colIdx + 1];
          if (((prevSeat_1.select !== 1 || prevSeat_1.confirm !== 1 ) && prevSeat_1.seatNull !== 1)) {//判断前后座位是否被预定或被购买
            if (colIdx !== 1 && colIdx !== lastIdx - 1) {//排除第前三个、后第三个座位，即范围在前第3到后第3座位之间
              let prevSeat_2 = this.seat[rowIdx][colIdx - 2];
              let nextSeat_2 = this.seat[rowIdx][colIdx + 2];
              if (((prevSeat_2.select == 1 || prevSeat_2.confirm == 1) && prevSeat_2.seatNull !== 1) && ((prevSeat_1.select !== 1) && prevSeat_1.seatNull !== 1)) {//第前2个被买，并且前1没被买
                if (nextSeat_1.select == 1 || nextSeat_1.confirm == 1) {//后1被买
                  selectSeat();
                  console.log('可以选择 0');
                } else {//后一没被买，就会留下单座
                  console.log('请不要留下单个座位 0');
                }
              } else {
                selectSeat();
                console.log('可以选择 1');
              }
            } else if (nextSeat_1.select == 1 || nextSeat_1.confirm == 1) {//第3个被买的情况下，选择第二个
              selectSeat();
              console.log('可以选择 2');
            } else {
              console.log('请不要留下单个座位 2');
            }
          } else {
            selectSeat();
            console.log('可以选择 3');
          }
        } else {
          selectSeat();
          console.log('可以选择 4');
        }
        function selectSeat() {
          if(_this.chooseSeat.length>6){
            alert('单次购买不能超过6张');
          return;
          }

          if (+colData.confirm == 1) {
            alert('已经有人了，请选择其他空座');
          } else if (+colData.tempSelect == 1) {
            alert('已被他人预定，请选择其他空座');
          } else if (+colData.seatNull !== 1 && +colData.tempSelect !== 1 && +colData.confirm !== 1) {
            let key = `${rowIdx}${colIdx}`;
            if (+colData.select == 0) {
              colData.select = 1;
              _this.emptySeat--;
              _this.count++;
              _this.chooseSeat[_this.chooseSeat.length] = {};
              _this.chooseSeat[_this.chooseSeat.length - 1][key] = colData;
              console.log('加座', _this.chooseSeat);
            } else {
              colData.select = 0;
              _this.emptySeat++;
              _this.count--;
              for (let i = 0, l = _this.chooseSeat.length; i < l; i++) {
                if (_this.chooseSeat[i][key] !== undefined) {
                  _this.chooseSeat.splice(i, 1);
                  console.log('减座', key);
                }
              }
            }
          }
        }

        //锁定座位
        //changeTemp();
        //function changeTemp() {
        //  if (colData.tempSelect == 1) {
        //    colData.tempSelect = 0;
        //  } else {
        //    colData.tempSelect = 1;
        //  }
        //}
      },
      comfirmTicket(){
        let _this = this;
        _this.loading = true;
        _this.$http.post('/mtime/update_movie_seat', qs.stringify(
          {
            movieId: 1,
            seat: _this.chooseSeat
          }
        )).then(function (res) {
          console.log(res.data);
          //请求结束后,页面出现，loading消失
          _this.loading = false;
          alert('您已购买成功');
        }).catch(function (err) {
          console.log('err post seat', err);
        });
      }
    }
  }
</script>

<style lang="scss">
  .out_wraper{
    display: flex;
    flex-direction: column;
    .choose_seat_header {
      display: flex;
      background: #1C2635;
      color: #fff;
      align-items: center;
      position: relative;
      .back {
        width: 4.4rem;
        height: 4.4rem;
        background: url("./h_btn_back.png") no-repeat 1.5rem center;;
        background-size: auto 1.5rem;
        z-index: 2000;
      }
      .header_text {
        display: flex;
        flex-direction: column;
        flex: 1;
        text-align: center;
        margin-left: -3rem;
        .movie_name {
          font-size: 1.5rem;
        }
        .movie_type {
          font-size: 1.2rem;
          padding-top: .5rem;
        }
      }
    }
    .choose_seat {
      width: 100%;

      .seat_cnt {
        padding-top: 1.5rem;
        border-bottom: 1px solid #D8D8D8;
        .screen_cnt {
          text-align: center;
          font-size: 1.2em;
          color: #404040;
          line-height: 1.4;
          .screen {
            position: relative;
            .screen_pic {
              height: 1.8rem;
              margin: 0 auto -0.5rem;
              background: url("./screen.png") no-repeat center center;
              background-size: cover;
            }
            .seat_rest {
              color: #ccc;
            }
            .zoom {
              width: 4.4rem;
              height: 4.4rem;
              position: absolute;
              right: 1rem;
              top: 0.4rem;
              background: url('./zoomin.png') no-repeat center bottom;
              background-size: 2.4em auto;
            }
          }
        }
        .seat_row_cnt {
          display: flex;
          padding: 1.5rem 1rem 1.5rem .5rem;
          .seat_row_num {
            background: #858585;
            border-radius: .6rem;
            text-align: center;
            margin-right: 2rem;
            .seat_row_num_item {
              width: 1.35rem;
              height: 1.43rem;
              line-height: 1.4rem;
              font-size: 1rem;
              color: #dcdcdc;
            }
          }
          .seat_row_seat_cnt {
            .seat_row_seat {
              display: flex;
              .seat_row_seat_item {
                width: 1.35rem;
                height: 1.125rem;
                margin-right: .1rem;
                margin-left: .1rem;
                margin-top: 0.3rem;
                background: url("./icon_seat.png") no-repeat 0 0;
                background-size: cover;
                &.select {
                  background: url("./icon_seaton.png") no-repeat 0 0;
                  background-size: cover;
                }
                &.seatnull {
                  background: #fff;
                }
                &.seat_temp_select {
                  background: url("./Lock.png") no-repeat 0 0;
                  background-size: 1.35rem 1.125rem;
                }
                &.confirm {
                  background: url("./person.png") no-repeat 0 0;
                  background-size: cover;
                }

              }
            }
          }
        }

      }
      .seat_select_info {
        padding-left: 2rem;
        padding-top: 1rem;
        .seat_movie_time {
          font-size: 1.6rem;
          font-weight: bold;
          color: #333;
        }
        .seat_time_change {
          color: #1e7dd7;
          font-size: 1.2rem;
          line-height: 1.2;
          font-weight: normal;
          padding-left: 1rem;
        }
        .seat_movie_loacation {
          padding-top: 1.2rem;
          font-size: 1.3rem;
          line-height: 1.8rem;
          display: flex;
          width: 100%;
          align-items: center;
          height: 1.6rem;
          .location{
            flex: 1;
          }
          .price{
            text-align: right;
            margin-right: 1.5rem;
            i{
              color: #ff8600;
              font-style: normal;
              font-size: 1.6rem;
              line-height: 1.6rem;
              height: 1.6rem;
            }
          }
        }
        .seat_ticket_choose {
          display: flex;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          .seat_ticket_choose_item {
            padding: .2rem 0;
            .seat_ticket_cnt {
              margin: 0 .2rem;
              position: relative;
              overflow: hidden;
              display: inline-block;
              &:after, &:before {
                content: "";
                display: block;
                width: 1rem;
                height: 1rem;
                background: #fff;
                border-radius: 1rem;
                position: absolute;
                top: 50%;
                right: -0.5rem;
                margin-top: -0.6rem;
                border: 1px solid #ffcca6;
              }
              &:before {
                left: -0.5rem;
              }
              .seat_ticket {
                display: inline-block;
                overflow: hidden;
                background: #fff9f2;
                line-height: 1.8em;
                border: 1px solid #ffcca6;
                height: 1.855em;
                font-size: 1.2em;
                color: #363535;
                text-align: center;
                padding: 0 .8em;
                font-style: normal;
                width: 4.5rem;
              }
            }
          }
        }
      }
      .price_bar {
        align-items: center;
        font-size: 1.2rem;
        height: 3.5rem;
        line-height: 3.5rem;
        display: flex;
        position: fixed;
        left:.6rem;
        bottom: 0;
        width: 100%;
        .left {
          flex: 1;
          .price {
            vertical-align: middle;
            font-size: 2rem;
            color: #ff8600;
            align-items: center;
          }
          i {
            font-style: normal;
            color: #999;
          }
        }
        .price_confirm {
          width: 9.5rem;
          text-align: center;
          font-size: 1.4rem;
          height: 100%;
          display: inline-block;
          color: #fff;
          background: #ff8600;
        }
      }
    }
  }


</style>
