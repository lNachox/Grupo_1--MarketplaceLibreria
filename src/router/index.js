import { createRouter, createWebHistory } from 'vue-router';

import ProductList from '../components/views/ProductList.vue';
import ProductDetail from '../components/views/ProductDetail.vue';
import PageNotFound from '@/components/views/PageNotFound.vue';
import UserList from '../components/views/UserList.vue';
import UserDetail from '../components/views/UserDetail.vue';
import UserAuth from '../components/views/UserAuth.vue';
import UserProfileEdit from '../components/views/UserProfileEdit.vue'
import Complaints from '../components/views/Complaints.vue'
import ShoppingCart from '../components/views/ShoppingCart.vue'
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
  },
  {
    path: '/user/:id', 
    name: 'EditProfile', 
    component: UserProfileEdit
  },
  {
    path: '/complaints',
    name: 'complaints',
    component: Complaints
  },
  { path: '/cart', 
  name: 'cart', 
  component: ShoppingCart
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
  
export default router;
