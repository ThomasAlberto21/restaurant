import HomeVue from '@/views/Home.vue';
import MenuVue from '@/views/Menu.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
