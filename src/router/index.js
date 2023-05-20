import HomeVue from '@/views/Home.vue';
import MenuVue from '@/views/Menu.vue';
import CartVue from '@/views/Cart.vue';
import SuccessOrder from '@/views/SuccessOrder.vue';
import MenuDetailVue from '@/views/MenuDetail.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomeViews',
    component: HomeVue,
  },
  {
    path: '/menu',
    name: 'MenuViews',
    component: MenuVue,
  },
  {
    path: '/menu/:id',
    name: 'MenuDetailViews',
    component: MenuDetailVue,
  },
  {
    path: '/cart',
    name: 'CartViews',
    component: CartVue,
  },
  {
    path: '/success-order',
    name: 'SuccessOrderViews',
    component: SuccessOrder,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
