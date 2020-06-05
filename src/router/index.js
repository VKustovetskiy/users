import Vue from 'vue'
import Router from 'vue-router'

// [FIX]: NavigationDuplicated Navigating to current location is not allowed
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/users',
      component: () => import('@/views/Users'),
      children: [
        {
          path: '',
          name: 'UserList',
          component: () => import('@/components/Users/UserList')
        },
        {
          path: ':id',
          name: 'UserDetails',
          component: () => import('@/components/Users/UserDetails')
        }
      ]
    },
    { path: '*', redirect: { name: 'Dashboard' } }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

export default router
