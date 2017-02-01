<template>
  <div class="movie_detail">
    <div class="header">
      <div class="back" @click='back'></div>
      <div class="favorite"></div>
      <div class="share"></div>
    </div>
    <div class="bg_cnt">
      <div class="bg_cinema" style="background-image:url('http://mokebuy.com:13009/4001.jpg')">
        <div class="bg_img" style="background-image:url('http://mokebuy.com:13009/4001.jpg')"></div>
        <p></p>
      </div>
    </div>
    <div class="cinemabox">
      <img src="http://mokebuy.com:13009/4001.jpg">
      <div class="cinema_txt">
        <div class="txt_cnt">
          <h1 class="title">西游伏妖篇</h1>
          <h2 class="title_en">Journey to the West: Demon Chapter</h2>
          <div class="during">108分钟</div>
          <div class="type">奇幻 / 动作 / 喜剧</div>
          <div class="playtime">2017年1月28日中国上映</div>
        </div>
        <div class="btn">
          <div class="want">我想看</div>
          <div class="toscore">我要评分</div>
        </div>
      </div>
    </div>
    <div class="short_desc">
      <i></i>
      <b>唐僧"重色轻友"与悟空反目</b>
    </div>
    <div class="btn_box">
      <div class="purchase_btn">查影讯/购票</div>
    </div>
    <div class="bar"></div>
    <div class="long_desc_cnt">
      <div class="long_desc">
        作为《西游降魔篇》的后继故事，唐三藏在上集感化了杀死段小姐的齐天大圣，并收其为徒后，带着孙悟空、猪八戒及沙僧，一行四人踏上西天取经之旅，路途凶险，除魔伏妖，师徒四人也在取经的过程中有个各自的成长与改变。
      </div>
      <div class="show_more_btn"></div>
    </div>
    <div class="bar"></div>
    <div class="actor_cnt_border">
      <div class="actor_cnt">
        <TitleBar></TitleBar>
        <div class="actor_pic_cnt">
          <div class="director">
            <div class="type">导演</div>
            <div class="info_cnt">
              <img class="director_pic" src="http://mokebuy.com:13009/4001.jpg">
              <div class="name">徐克</div>
              <div class="name_en">Hark Tsui</div>
            </div>
          </div>
          <div class="actor">
            <div class="type">主要演员</div>
            <div class="actor_item">
              <div class="info_cnt">
                <img class="actor_fact" src="http://mokebuy.com:13009/4001.jpg">
                <div class="name">吴亦凡</div>
                <div class="name_en">Kris Wu</div>
                <img class="actor_role" src="http://mokebuy.com:13009/4001.jpg">
                <div class="role_name">饰：唐三藏</div>
              </div>
              <div class="info_cnt">
                <img class="actor_fact" src="http://mokebuy.com:13009/4001.jpg">
                <div class="name">林更新</div>
                <div class="name_en">Kenny Lin</div>
                <img class="actor_role" src="http://mokebuy.com:13009/4001.jpg">
                <div class="role_name">饰：孙悟空</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar"></div>
    <div class="movie_pic_box">
      <TitleBar></TitleBar>
      <div class="movie_pic_cnt">
        <img src='http://mokebuy.com:13009/4001.jpg'>
        <img src='http://mokebuy.com:13009/4001.jpg'>
        <img src='http://mokebuy.com:13009/4001.jpg'>
        <img src='http://mokebuy.com:13009/4001.jpg'>
      </div>
    </div>
    <div class="short_desc_box">
      <TitleBar></TitleBar>
      <div class="short_desc_item">
        <div class="head_icon">
          <img src="http://mokebuy.com:13009/4001.jpg">
        </div>
        <div class="commet_box">
          <div class="content">
            <span class="name">如茶女子</span>
            <i class="time">56分钟前-评</i>
            <b class="score">8.4</b>
          </div>
          <p class="txt">虎头蛇尾吧 我觉得 不过整部片子看完 林更新太超乎我预期了 喜欢他的那个暗黑系的孙悟空 王丽坤非常适合演妖精呀</p>
          <div class="btn_box">
            <i class="feed_icon"></i>
            <span class="feed">回复</span>
            <i class="good"></i>
            <span class="good_num">1</span>
          </div>
        </div>
      </div>
      <div class="short_desc_item">
        <div class="head_icon">
          <img src="http://mokebuy.com:13009/4001.jpg">
        </div>
        <div class="commet_box">
          <div class="content">
            <span class="name">如茶女子</span>
            <i class="time">56分钟前-评</i>
            <b class="score">8.4</b>
          </div>
          <p class="txt">虎头蛇尾吧 我觉得 不过整部片子看完 林更新太超乎我预期了 喜欢他的那个暗黑系的孙悟空 王丽坤非常适合演妖精呀</p>
          <div class="btn_box">
            <i class="feed_icon"></i>
            <span class="feed">回复</span>
            <i class="good"></i>
            <span class="good_num">1</span>
          </div>
        </div>
      </div>
      <div class="short_desc_item">
        <div class="head_icon">
          <img src="http://mokebuy.com:13009/4001.jpg">
        </div>
        <div class="commet_box">
          <div class="content">
            <span class="name">如茶女子</span>
            <i class="time">56分钟前-评</i>
            <b class="score">8.4</b>
          </div>
          <p class="txt">虎头蛇尾吧 我觉得 不过整部片子看完 林更新太超乎我预期了 喜欢他的那个暗黑系的孙悟空 王丽坤非常适合演妖精呀</p>
          <div class="btn_box">
            <i class="feed_icon"></i>
            <span class="feed">回复</span>
            <i class="good"></i>
            <span class="good_num">1</span>
          </div>
        </div>
      </div>
      <div class="short_desc_item">
        <div class="head_icon">
          <img src="http://mokebuy.com:13009/4001.jpg">
        </div>
        <div class="commet_box">
          <div class="content">
            <span class="name">如茶女子</span>
            <i class="time">56分钟前-评</i>
            <b class="score">8.4</b>
          </div>
          <p class="txt">虎头蛇尾吧 我觉得 不过整部片子看完 林更新太超乎我预期了 喜欢他的那个暗黑系的孙悟空 王丽坤非常适合演妖精呀</p>
          <div class="btn_box">
            <i class="feed_icon"></i>
            <span class="feed">回复</span>
            <i class="good"></i>
            <span class="good_num">1</span>
          </div>
        </div>
      </div>
      <div class="short_desc_item">
        <div class="head_icon">
          <img src="http://mokebuy.com:13009/4001.jpg">
        </div>
        <div class="commet_box">
          <div class="content">
            <span class="name">如茶女子</span>
            <i class="time">56分钟前-评</i>
            <b class="score">8.4</b>
          </div>
          <p class="txt">虎头蛇尾吧 我觉得 不过整部片子看完 林更新太超乎我预期了 喜欢他的那个暗黑系的孙悟空 王丽坤非常适合演妖精呀</p>
          <div class="btn_box">
            <i class="feed_icon"></i>
            <span class="feed">回复</span>
            <i class="good"></i>
            <span class="good_num">1</span>
          </div>
        </div>
      </div>
      <div class="short_desc_item">
        <div class="head_icon">
          <img src="http://mokebuy.com:13009/4001.jpg">
        </div>
        <div class="commet_box">
          <div class="content">
            <span class="name">如茶女子</span>
            <i class="time">56分钟前-评</i>
            <b class="score">8.4</b>
          </div>
          <p class="txt">虎头蛇尾吧 我觉得 不过整部片子看完 林更新太超乎我预期了 喜欢他的那个暗黑系的孙悟空 王丽坤非常适合演妖精呀</p>
          <div class="btn_box">
            <i class="feed_icon"></i>
            <span class="feed">回复</span>
            <i class="good"></i>
            <span class="good_num">1</span>
          </div>
        </div>
      </div>
      <div class="short_desc_item">
        <div class="head_icon">
          <img src="http://mokebuy.com:13009/4001.jpg">
        </div>
        <div class="commet_box">
          <div class="content">
            <span class="name">如茶女子</span>
            <i class="time">56分钟前-评</i>
            <b class="score">8.4</b>
          </div>
          <p class="txt">虎头蛇尾吧 我觉得 不过整部片子看完 林更新太超乎我预期了 喜欢他的那个暗黑系的孙悟空 王丽坤非常适合演妖精呀</p>
          <div class="btn_box">
            <i class="feed_icon"></i>
            <span class="feed">回复</span>
            <i class="good"></i>
            <span class="good_num">1</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import TitleBar from 'components/titleBar/TitleBar';
  import {mapGetters,mapActions} from 'vuex';
  export default{
    components: {
      TitleBar
    },
    mounted(){
      this.hideNavAndSearch();
    },
    methods: {
      ...mapActions([
        'hideNavAndSearch'
      ]),
      back(){
        this.$router.push('/home');
      }
    }
  };

</script>

<style lang="scss">
  .movie_detail {
    position: relative;
    .header {
      z-index: 2;
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      .back, .share, .favorite {
        width: 5.3rem;
        height: 4.4rem;
        background: url('./h_btn_back.png') no-repeat center;
        background-size: auto 1.8rem;
      }
      .favorite {
        background: url('./i_h_collection.png') no-repeat center;
        background-size: auto 2.2rem;
        margin-left: 20rem;
      }
      .share {
        background: url('./i_h_share.png') no-repeat center;
        background-size: auto 2.2rem;
        margin-right: 1rem;
      }
    }
    .bg_cnt {
      .bg_cinema {
        height: 14rem;
        background-color: #4c4c4c;
        z-index: 0;
        overflow: hidden;
        background-size: 100% auto;
        position: relative;
        &:after {
          content: '';
          display: block;
          background: rgba(0, 0, 0, 0.2);
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
        .bg_img {
          background-size: 100% auto;
          height: 14rem;
          background-repeat: no-repeat;
          background-position: center top;
          filter: blur(12px);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        p {
          height: 14rem;
          background: url('./cinemainfo_bg.png') no-repeat center bottom;
          background-size: auto 4rem;
          position: relative;
          z-index: 2;
        }
      }
    }
    .cinemabox {
      display: flex;
      margin-top: -9.1rem;
      padding: 0 0 0 1.5rem;
      z-index: 1;
      position: relative;
      img {
        margin-right: 1rem;
        padding: .2rem;
        width: 10.9rem;
        height: 16rem;
      }
      .cinema_txt {
        .txt_cnt {
          height: 12rem;
          .title {
            margin-top: .8rem;
            font-size: 1.8rem;
            line-height: 1.4;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #fff;
            font-weight: bold;
          }
          .title_en {
            width: 17rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 1.2rem;
            line-height: 1.4;
            height: 1.3rem;
            color: #fff;
          }
          .during {
            margin-top: 1.4rem;
            font-size: 1.2rem;
            line-height: 1.4;
            font-weight: bold;
          }
          .type, .playtime {
            margin-top: .6rem;
            font-size: 1.2rem;
            line-height: 1.4;
            font-weight: bold;
          }
        }
        .btn {
          display: flex;
          .want, .toscore {
            margin-right: .5rem;
            padding: .9rem 0;
            font-size: 1.4rem;
            border: 1px solid #999;
            color: #777;
            border-radius: 40em;
            text-align: center;
            width: 8.05rem;
          }
          .toscore {
            border: 1px solid #659c0d;
            color: #659c0d;
          }
        }
      }
    }
    .short_desc {
      text-align: center;
      margin-top: 1rem;
      i {
        width: 1.3rem;
        height: 1.2rem;
        background: url("./i_dot.png") no-repeat;
        background-size: cover;
        margin: -0.4rem .3rem 0 0;
        display: inline-block;
        vertical-align: middle;
      }
      b {
        font-weight: normal;
        font-size: 1.4rem;
        color: #fd8900;
      }
    }
    .btn_box {
      padding: 1.5rem;
      .purchase_btn {
        width: 100%;
        background: #ff8600;
        color: #fff;
        border: 1px solid #ff8600;
        border-radius: 40rem;
        text-align: center;
        padding: 1rem 0;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    .bar {
      height: 1.2rem;
      background: #f6f6f6;
    }
    .long_desc_cnt {
      padding: 1.1rem 1.5rem 0;
      color: #333;
      .long_desc {
        font-size: 1.4rem;
        color: #333;
        line-height: 1.5;
        height: 4rem;
        overflow: hidden;
        &.show_more {
          height: auto;
        }
      }
      .show_more_btn {
        background: #fff url('./i-tmore.png') no-repeat center center;
        background-size: auto .8rem;
        height: 2.9rem;
        .show_more_click {
          transform: rotate(180deg);
        }
      }
    }
    .actor_cnt_border {
      padding-bottom: .5rem;
      .actor_cnt {
        padding-left: 1.5rem;
        .actor_pic_cnt {
          display: flex;
          font-size: 1.2rem;
          .type {
            padding: 0 0 .5rem 0;;
          }

          .info_cnt {
            text-align: center;
            .director_pic {
              width: 8.55rem;
              overflow: hidden;
              height: 13rem;
              margin: 0 auto .5rem;
            }
          }
          .director {
            border-right: 1px solid #D8D8D8;
            margin-right: 1rem;
            padding-right: 1rem;
          }
          .name {
            margin: .5rem 0;
          }
          .actor_item {
            display: flex;
            .info_cnt {
              margin-right: 1rem;
              .name_en {
                margin-bottom: 1.3rem;
              }
              .actor_fact {
                width: 8.55rem;
                height: 8.55rem;
              }
              .actor_role {
                width: 4rem;
                height: 4rem;
                padding: 0;
                margin: 1.1rem auto;
                border-radius: 4rem;
                overflow: hidden;
              }
              .role_name {
                margin-bottom: 1.6rem;
              }
            }
          }
        }
      }
    }
    .movie_pic_box {
      padding: 1.4rem;
      .movie_pic_cnt {
        display: flex;
        align-items: center;
        img {
          width: 6.6rem;
          height: 6.6rem;
          margin: 0 auto;
        }
      }
    }
    .short_desc_box {
      padding: 0 1.5rem 1.5rem 1.5rem;
      .short_desc_item {
        margin-top: 1.5rem;
        display: flex;
        border-bottom: 1px solid #7e8c8d;
        .head_icon {
          margin-right: 1rem;
          img {
            height: 4rem;
            width: 4rem;
            border-radius: 4.1rem;
          }
        }
        .commet_box {
          .content {
            font-size: 1.2rem;
            color: #999;
            line-height: 1.8;
            display: flex;
            .name {
              flex: 1;

            }
            .time {
              font-style: normal;
            }
            .score {
              font-size: 1.1rem;
              background: #659d0e;
              width: 2em;
              height: 1.8em;
              color: #fff;
              text-align: center;
              margin-left: .5rem;
            }
          }
          .txt {
            font-size: 1.4em;
            line-height: 1.5;
            margin-top: 1rem;
          }
        }
        .btn_box {
          text-align: right;
          font-size: 1.2rem;
          color: #777;
          margin-top: -.5rem;
          .feed_icon {
            display: inline-block;
            margin: 0 .1rem 0 0;
            width: 1.8rem;
            height: 1.8rem;
            background: url("./ico_reply.png") no-repeat center center;
            background-size: cover;
            vertical-align: middle;
          }
          .feed {
            margin-right: 1rem;
          }
          .good {
            display: inline-block;
            margin: 0 .08rem 0 0;
            width: 1.8rem;
            height: 1.8rem;
            vertical-align: middle;
            background: url("./ico_praise.png") no-repeat center center;
            background-size: cover;
          }
        }
      }
    }
  }
</style>
