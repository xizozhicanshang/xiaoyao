import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//axios引入
import axios from "axios"
Vue.prototype.$http = axios;

// //axios 的请求拦截
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断vuex中是否存在token
//     // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     config.headers.Authorization = window.sessionStorage.getItem('token');
//     return config;
//   },
//   error => {
//     return Promise.error(error);
//   }
// );


//全局前置守卫:路由跳转前调用
router.beforeEach((to,from,next)=>{
console.log(to);  // 即将要跳转的路由
console.log(from); // 即将要离开的路由
next() // 一定要调用 执行下一个钩子 全部钩子执行完 跳转到地址栏上的路由
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')