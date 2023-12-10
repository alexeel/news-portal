import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NewsList from '@/views/news/NewsList.vue';
import NotFound from '@/components/NotFound/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: NewsList,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return { ...savedPosition };
    return { left: 0, top: 0 };
  },
});

export default router;
