import { defineComponent, h } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import AppBoardsPage from '@/pages/AppBoardsPage.vue';
import AppLoginPage from "@/pages/AppLoginPage.vue"


const NotFoundPage = defineComponent({
  render() {
    return h('div', 'not found')
  }
});

const routes: readonly RouteRecordRaw[] = [
  { path: '/', component: AppBoardsPage },
  { path: '/login', component: AppLoginPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;