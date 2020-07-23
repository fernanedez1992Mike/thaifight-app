import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/event-list',
    name: 'event-list',
    component: () => import('@/views/EventList.vue'),
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: () => import('@/views/EventShow.vue'),
  },
  {
    path: '/event-create',
    name: 'event-create',
    component: () => import('@/views/EventCreate.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
  },
  {
    path: '/user/:username',
    name: 'user',
    component: () => import('@/views/User.vue'),
    props: true
  },
  {
    path: '/articles',
    name: 'article',
    component: () => import('@/views/Article.vue'),
  },
  {
    path: '/articles-edit',
    name: 'articleEdit',
    component: () => import('@/views/ArticleEdit.vue'),
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
