// import HelloWorld from '../../../components/HelloWorld.vue'
import Home from '../views/home.vue'
import PageA from '../views/PageA.vue'
import PageB from '../views/PageB.vue'
let routes = [
  {
    path: '/',
    name: '餐饮行业首页',
    component: Home
  }, {
    path: '/pagea',
    name: '餐饮行业pagea',
    component: PageA
  }, {
    path: '/pageb',
    name: '餐饮行业pageb',
    component: PageB
  }
]
export default routes
