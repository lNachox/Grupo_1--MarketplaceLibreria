import { createRouter, createWebHistory } from 'vue-router';

import ProductList from '../components/views/ProductList.vue';
import ProductDetail from '../components/views/ProductDetail.vue';
import PageNotFound from '@/components/views/PageNotFound.vue';
import UserList from '../components/views/UserList.vue';
import UserDetail from '../components/views/UserDetail.vue';
import UserAuth from '../components/views/UserAuth.vue';

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/userList',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail,
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/userAuth',
    name: 'UserAuth',
    component: UserAuth
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
  
export default router;
