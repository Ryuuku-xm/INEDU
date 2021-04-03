import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/regist.vue')
  },

  {
    path: '/Main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },

  {
    path: '/UserInf',
    name: 'UserInf',
    component: () => import('../views/UserInf.vue')
  },

  {
    path: '/CourseInf',
    name: 'CourseInf',
    component: () => import('../views/CourseInf.vue')
  },

  {
    path: '/tttest',
    name: 'Tttest',
    component: () => import('../views/tttest.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
