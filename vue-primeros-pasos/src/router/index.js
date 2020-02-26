import Vue from 'vue';
import VueRouter from 'vue-router';

import Inicio from '../views/Inicio.vue';
import Interpolaciones from '../views/Interpolaciones.vue';
import Directivas from '../views/Directivas.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/interpolaciones',
    name: 'Interpolaciones',
    component: Interpolaciones,
  },
  {
    path: '/directivas',
    name: 'Directivas',
    component: Directivas,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
});

export default router;
