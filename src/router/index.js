import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    redirect: "/movie",
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
            // props: { a: 3 }
            // props: (route) => ({ a: route.query.a })
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
        name: "show",
        component: () => import("../views/Show.vue"),
        beforeEnter: (to, from, next) => {
          if (!localStorage.getItem("token")) {
            next("/login");
          } else {
            next();
          }
        }
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
    path: "/detail/:movieId",
    name: "detail",
    // props: true,
    component: () => import("../views/Detail.vue")
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "*",
    component: () => import("../views/Not404.vue")
  }
];

const router = new VueRouter({
  routes
});

// 全局的路由前置守卫
router.beforeEach((to, from, next) => {
  // console.log("to", to);
  // console.log("from", from);
  next();
  // 如果没有登录，不让进演出页
  // if (to.name === "show") {
  //   if (!localStorage.getItem("token")) {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }
});

// 全局的后置钩子
// router.afterEach((to, from) => {
//   console.log("to", to);
//   console.log("from", from);
// })

// 解决路由重复点击报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
