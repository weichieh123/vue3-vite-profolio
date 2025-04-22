import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage/index.vue';
import InfoPage from '@/views/InfoPage/index.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/info',
    name: 'InfoPage',
    component: InfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
