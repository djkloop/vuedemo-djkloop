import Vue from 'vue'
import App from './App.vue'
import Loading from "./_components/Loading"
import BackTop from "./_components/BackTop"
import router from './router/router.config'
import Element from 'element-ui'
import store from './store/'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'
import * as types from './store/types'

Vue.use(Loading);
Vue.use(BackTop);
Vue.use(Element);

require("./assets/css/index.css");
require("./assets/css/rest.css");
require("./assets/css/layout.css")

   //axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
   //
   axios.interceptors.request.use(function (config) {  //配置发送请求的信息
   		store.dispatch(types.SHOWLOADING);
       return config;
   }, function (error) {
       return Promise.reject(error);
   });

   axios.interceptors.response.use(function (response) { //配置请求回来的信息
   	   store.dispatch(types.HIDELOADING);
       return response;
   }, function (error) {
       return Promise.reject(error);
   });

   /*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);*/
//  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//   axios.defaults.baseURL='http://localhost:8080/';
   Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
});
