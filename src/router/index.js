import Vue from 'vue'
import VueRouter from 'vue-router'
import placeorder from '../views/placeorder/placeorder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'Goods'
  },
  {
    path: '/placeorder',
    name: 'placeorder',
    component: placeorder
  },
  {
    path: '/Goods',
    name: 'Goods',
    component: () => import('../views/Goods/Goods.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
