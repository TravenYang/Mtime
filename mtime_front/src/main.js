// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router_config'
/* eslint-disable no-new */
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
