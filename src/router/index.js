import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AdminPage from '@/views/AdminPage.vue'
import AdminLoginPage from '@/views/AdminLoginPage.vue'
import AdminAddItemPage from '@/views/AdminAddItemPage.vue'
import { useCookies } from 'vue3-cookies'

const cookies = useCookies()
const requireAdminAuth = (to, from, next) => {
  const isLogged = cookies.cookies.get('FootforwardLogged')
  const isAdmin = cookies.cookies.get('FootforwardIsAdmin')
  if (Boolean(isLogged) === true && Boolean(isAdmin) === true) {
    next()
  } else {
    next({ path: '/admin/login' })
  }
}
const requireAdminLoginAuth = (to, from, next) => {
  const isLogged = cookies.cookies.get('FootforwardLogged')
  const isAdmin = cookies.cookies.get('FootforwardIsAdmin')
  const date = new Date()
  date.setTime(date.getTime() + 15 * 60 * 1000)
  if (Boolean(isLogged) === false || Boolean(isAdmin) === false) {
    next()
  } else {
    next({ path: '/admin' })
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage,
      beforeEnter: requireAdminAuth,
    },
    {
      path: '/admin/login',
      name: 'AdminLoginPage',
      component: AdminLoginPage,
      beforeEnter: requireAdminLoginAuth,
    },
    {
      path: '/admin/additem',
      name: 'AdminAddItemPage',
      component: AdminAddItemPage,
      beforeEnter: requireAdminAuth,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (
    to.name === 'HomePage' ||
    to.name === 'AdminPage' ||
    to.name === 'AdminLoginPage' ||
    to.name === 'AdminAddItemPage'
  ) {
    next()
  } else {
    next({ path: '/' })
  }
})

export default router
