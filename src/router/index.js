import Vue from 'vue'
import VueRouter from 'vue-router'
import placeorder from '../views/placeorder/placeorder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'SelectDiscount'
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
  },
  {
    path: '/SelectFunction',
    name: 'SelectFunction',
    component: () => import('../views/SelectFunction/SelectFunction.vue')
  },
  {
    path: '/SelectDiscount',
    name: 'SelectDiscount',
    component: () => import('../views/SelectDiscount/SelectDiscount.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
