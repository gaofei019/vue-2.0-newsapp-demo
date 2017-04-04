import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './router.config.js'

import store from './store/'
import axios from 'axios'
import Loading from './components/loading'

import filters from './filters/'

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));



import './assets/css/base.css' //引入全局的base文件
import './assets/js/font.js'
import './assets/js/jquery-1.7.2.js'


Vue.use(VueRouter);
Vue.use(Loading);

//关于axios配置
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
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

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了


const router=new VueRouter({
    mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes
});

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})
