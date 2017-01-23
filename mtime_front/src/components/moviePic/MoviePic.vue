<template>
  <div class="movie_pic">
    <a class="movie_item">
      <div class="movie_item_pic">
        <img class="img" src="http://mokebuy.com:13009/4000.jpg">
        <span class="score">7.7</span>
      </div>
      <h1 class="title">降临</h1>
    </a>
    <a class="movie_item">
      <div class="movie_item_pic">
        <img class="img" src="http://mokebuy.com:13009/4000.jpg">
        <span class="score">7.7</span>
      </div>
      <h1 class="title">降临</h1>
    </a><a class="movie_item">
    <div class="movie_item_pic">
      <img class="img" src="http://mokebuy.com:13009/4000.jpg">
      <span class="score">7.7</span>
    </div>
    <h1 class="title">降临</h1>
  </a><a class="movie_item">
    <div class="movie_item_pic">
      <img class="img" src="http://mokebuy.com:13009/4000.jpg">
      <span class="score">7.7</span>
    </div>
    <h1 class="title">降临</h1>
  </a><a class="movie_item">
    <div class="movie_item_pic">
      <img class="img" src="http://mokebuy.com:13009/4000.jpg">
      <span class="score">7.7</span>
    </div>
    <h1 class="title">降临</h1>
  </a><a class="movie_item">
    <div class="movie_item_pic">
      <img class="img" src="http://mokebuy.com:13009/4000.jpg">
      <span class="score">7.7</span>
    </div>
    <h1 class="title">降临</h1>
  </a><a class="movie_item">
    <div class="movie_item_pic">
      <img class="img" src="http://mokebuy.com:13009/4000.jpg">
      <span class="score">7.7</span>
    </div>
    <h1 class="title">降临</h1>
  </a><a class="movie_item">
    <div class="movie_item_pic">
      <img class="img" src="http://mokebuy.com:13009/4000.jpg">
      <span class="score">7.7</span>
    </div>
    <h1 class="title">降临</h1>
  </a>

  </div>
</template>

<script type="text/ecmascript-6">
export default{};
</script>

<style lang="scss">
.movie_pic{
  display: flex;
  flex-wrap: wrap;

  .movie_item{
    width:25%;
    .title{
      padding:.5rem 0 0;
      margin-bottom:1rem;
      height:3.8rem;
      width:100%;
      text-align: center;
    }
    .movie_item_pic{
      position: relative;
      width:6.5rem;
      height:9.8rem;
      text-align: center;
      .img{
        width:100%;
        height:100%;
        border:1px solid #ddd;
        margin:0 auto;
      }
      .score{
        position: absolute;
        right:.3rem;
        top:.3rem;
        width:2rem;
        height:1.8rem;
        background:#659d0e;
        color:#fff;
        line-height:1.8rem;
        text-align:center;
      }
    }
  }


}
</style>
