import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {store} from "@/store";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/links',
    name: 'Links',
    // route level code-splitting
    // this generates a separate chunk (links.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "links" */ '../views/Links.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && !store.state.accessToken) {
    next({name: 'Home'})
  }
  else {
    next()
  }
})


export default router
