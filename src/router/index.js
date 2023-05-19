import HomeVue from '@/views/Home.vue';
import MenuVue from '@/views/Menu.vue';
import CartVue from '@/views/Cart.vue';
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
  {
    path: '/cart',
    name: 'Cart',
    component: CartVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
