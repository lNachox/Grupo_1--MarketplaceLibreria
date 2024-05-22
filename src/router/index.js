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
import SupplierDetail from '@/components/views/SupplierDetail.vue';
import SupplierProfileEdit from '@/components/views/SupplierProfileEdit.vue';
import SuppComplaints from '@/components/views/SuppComplaints.vue';


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
    path: '/editprofile', 
    name: 'editprofile', 
    component: UserProfileEdit
  },
  {
    path: '/complaints',
    name: 'complaints',
    component: Complaints
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '/supplierdetail',
    name: 'supplierdetail',
    component: SupplierDetail
  },
  {
    path: '/suppcomplaints',
    name: 'suppcomplaints',
    component: SuppComplaints
  },
  {
    path: '/supplierprofileedit',
    name: 'supplierprofileedit',
    component: SupplierProfileEdit
  },
  {
    path: '/suppliercart',
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
  
export default router;