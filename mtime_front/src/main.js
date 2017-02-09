// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router_config'
import store from './store/index'
import axios from 'axios';
/* eslint-disable no-new */
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

//本地
//axios.defaults.baseURL = 'http://192.168.1.5:13666';

////服务器
axios.defaults.baseURL = 'http://45.32.73.184:13666';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
