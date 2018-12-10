import Vue from 'vue'
import app from './sysApp'
import VueRouter from 'vue-router'
import routes from './router'
import api from '../../api'
import config from './config'
// import 'babel-polyfill'
Vue.use(VueRouter)

Vue.prototype.$api = api
Vue.prototype.config = config

let router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
console.log(router, 'router')
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
