import { defineComponent, h } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import AppBoardsPage from '@/pages/AppBoardsPage.vue';

const LoginPage = defineComponent({
  render() {
    return h('div', 'login')
  }
});

const NotFoundPage = defineComponent({
  render() {
    return h('div', 'not found')
  }
});

const routes: readonly RouteRecordRaw[] = [
  { path: '/', component: AppBoardsPage },
  { path: '/login', component: LoginPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;