import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Layout = () => import('@/views/layout')
const home = () => import('@/views/home')
const question = () => import('@/views/question')
const user = () => import('@/views/user')
const video = () => import('@/views/video')
const chat = () => import('@/views/uesr/chat')
const login = () => import('@/views/login')
const profile = () => import('@/views/user/profile')
const search = () => import('@/views/serch')
const searchresult = () => import('@/views/serch/result')
const article = () => import('@/views/article')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout, // 一级路由
    children: [{
      path: '',
      component: home
    }, {
      path: '/question',
      component: question
    }, {
      path: '/video',
      component: video
    }, {
      path: '/user',
      component: user
    }]
  }, {
    path: '/user/chat', // 一级路由
    component: chat
  }, {
    path: '/login',
    component: login
  }, {
    path: '/user/profile',
    component: profile
  }, {
    path: '/search',
    component: search
  }, {
    path: '/searchresult',
    component: searchresult
  }, {
    path: '/article',
    component: article
  }

]

const router = new VueRouter({
  routes
})

export default router
