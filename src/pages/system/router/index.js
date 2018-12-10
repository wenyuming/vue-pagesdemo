// import HelloWorld from '../../../components/HelloWorld.vue'
import Home from '../views/home.vue'
import PageA from '../views/PageA.vue'
import PageB from '../views/PageB.vue'
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/pagea',
    name: 'pagea',
    component: PageA
  }, {
    path: '/pageb',
    name: 'pageb',
    component: PageB
  }
]
export default routes
