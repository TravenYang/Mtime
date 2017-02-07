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
axios.defaults.baseURL = 'http://192.168.1.4:13000';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
