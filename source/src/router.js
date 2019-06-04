import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import App from './App.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadCrumb: 'Home',
      },
    },
    {
      path: '*',
      name: 'App',
      component: App,
      beforeEnter: (to, from, next) => {
        // ...
        console.log('app');
      },
    },
    {
      path: '/page',
      name: 'page',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/page/Index'),
      meta: {
        breadCrumb: 'page',
      },
      children: [
        {
          path: 'test',
          component: () => import(/* webpackChunkName: "about" */ './views/page/test/Index.vue'),
          meta: {
            breadCrumb: 'test',
          },
          children: [
            {
              path: 'test1',
              component: () => import(/* webpackChunkName: "about" */ './views/page/test/test1/Index.vue'),
              meta: {
                breadCrumb: 'test1',
              },
            },
          ],
        },
      ],
    },
  ],
});
// router.beforeRouteUpdate((to, from, next) => {
//   // ...
//   console.log($data);
// });
export default router;
