import { defineComponent, h } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import AppLoginPage from "@/pages/AppLoginPage.vue"
import AppBoardRoot from '@/pages/boards/AppBoardRoot.vue';
import AppDynamicBoard from '@/pages/boards/AppDynamicBoard.vue';
import AppBoard from '@/pages/boards/index.vue';


const NotFoundPage = defineComponent({
  render() {
    return h('div', 'not found')
  }
});

const RootPage = defineComponent({
  render() {
    return h('div', 'root page')
  }
});

const routes: readonly RouteRecordRaw[] = [
  { path: '/', component: RootPage },
  { path: '/login', component: AppLoginPage },
  {
    path: '/boards',
    component: AppBoard,
    children: [
      {
        path: '',
        name: 'board_root',
        component: AppBoardRoot
      }, 
      {
        path: '/boards/:boardId',
        name: 'board_dynamic',
        component: AppDynamicBoard,
      },
    ]
  },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;