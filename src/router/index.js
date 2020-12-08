import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/movie"
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/movie",
        component: () => import("../views/Movie.vue"),
        children: [
          {
            path: "/movie",
            redirect: "/movie/hot"
          },
          {
            path: "hot",
            component: () => import("../views/movie/Hot.vue")
          },
          {
            path: "cinema",
            component: () => import("../views/movie/Cinema.vue")
          },
          {
            path: "wait",
            component: () => import("../views/movie/Wait.vue")
          },
          {
            path: "classic",
            component: () => import("../views/movie/Classic.vue")
          }
        ]
      },
      {
        path: "/video",
        component: () => import("../views/Video.vue")
      },
      {
        path: "/minivideo",
        component: () => import("../views/MiniVideo.vue")
      },
      {
        path: "/show",
        component: () => import("../views/Show.vue")
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue")
      },
      {
        path: "*",
        component: () => import("../views/Not404.vue")
      }
    ]
  },
  {
    path: "*",
    component: () => import("../views/Not404.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
