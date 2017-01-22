<template>
  <div class="home">
    我是home
    1111111111
    <img :src="url+'116.jpg'">
  </div>
</template>

<script type="text/ecmascript-6">
  import{mapGetters}from 'vuex';
  export default{
    computed:{
      ...mapGetters([
        'url'
      ])
    }
  };
</script>

<style>

</style>
