<template>
  <div class="head-adv" @click="showHeadAdv" v-show="showHeadAdvVal">
    我是广告
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex';
  export default{
    computed: {
      ...mapGetters([
        'showHeadAdvVal'
      ]),
    },
    methods: {
      ...mapActions([
        'showHeadAdv'
      ])
    }
  };
</script>
<style lang="scss">

</style>
