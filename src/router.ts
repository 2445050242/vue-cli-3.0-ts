import Vue from 'vue'
import Router from 'vue-router'



import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      // 需要登录才能进入的页面可以增加一个meta属性
      // meta: { 
      //   requireAuth: true
      // }
      // component: () => import('./views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (localStorage.getItem('username')) {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
