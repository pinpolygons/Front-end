import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/profile",
      name: "profile",
      //lazy-loaded
      component: () => import("./views/Profile.vue")
    },
    {
      path: "/mod",
      name: "moderator",
      //lazy-loaded
      component: () => import("./views/BoardModerator.vue")
    },
    {
      path: "/admin",
      name: "admin",
      //lazy-loadded
      component: () => import("./views/BoardAdmin.vue")
    },
    {
      path: '/user',
      name: 'user',
      //lazy-loadded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/home1',
      name: 'home1',
      component: () => import('./views/BoardHome.vue')
    },
    {
      path: '/page',
      name: 'page1',
      component: () => import('./views/BoardPages.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('./views/BoardPage1.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/BoardAbout.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/BoardContact.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  //Cố gắng truy cập vào trang bị giới hạn + không đăng nhập
  if (authRequired && !loggedIn) {
    return next('/login');
  }          
  next();
});
                               