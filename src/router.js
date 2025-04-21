import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetail from './views/CardDetail.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'

const routes = [
  { path: '/homework5-api/', name: 'Home', component: HomePage },
  { path: '/homework5-api/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/homework5-api/employees/:id', name: 'CardDetail', component: CardDetail },
  { path: '/homework5-api/login', name: 'LoginPage', component: LoginPage },
  { path: '/homework5-api/settings', name: 'SettingsPage', component: SettingsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'LoginPage', query: {redirect: to.fullPath}})
  } else {
    next()
  }
})

export default router