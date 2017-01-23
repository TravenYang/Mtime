<template>
  <div class="news">
    <div class="news_item">
      <a class="news_img">
        <img src="./get.jpg">
      </a>
      <div class="news_info">
        <h1>
          <a>
            《蜘蛛巢城》上映60周年
          </a>
        </h1>
        <h2>电影天皇解读莎翁巨作</h2>
        <h3>2017-01-15 17:00:55</h3>
      </div>
    </div>
    <div class="news_item">
      <a class="news_img">
        <img src="./get.jpg">
      </a>
      <div class="news_info">
        <h1>
          <a>
            《蜘蛛巢城》上映60周年
          </a>
        </h1>
        <h2>电影天皇解读莎翁巨作</h2>
        <h3>2017-01-15 17:00:55</h3>
      </div>
    </div>
    <div class="news_item">
      <a class="news_img">
        <img src="./get.jpg">
      </a>
      <div class="news_info">
        <h1>
          <a>
            《蜘蛛巢城》上映60周年
          </a>
        </h1>
        <h2>电影天皇解读莎翁巨作</h2>
        <h3>2017-01-15 17:00:55</h3>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{};
</script>

<style lang="scss">
.news{
  display: flex;
  flex-direction: column;
  .news_item{
    display: flex;
    padding: 1.3rem 0 1.3rem 0;
    .news_img{
      margin-right: 1rem;
      width: 11.2rem;
      img{
        width: 100%;
      }
    }
    .news_info{
      h1{
        padding: 0 0 .4em 0;
        a{
          font-size:1.6rem;
          line-height:1.1;
          font-weight:bold;
          color:#333;
        }
      }
      h2{
        padding: .4rem 0;
        font-size: 1.2em;
        color: #777;
      }
      h3{
        padding: .4rem 0;
        font-size: 1.1rem;
        color: #999;
      }
    }
  }
}
</style>
