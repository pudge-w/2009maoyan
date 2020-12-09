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
        meta: { requieAlive: true },
        children: [
          {
            path: "/movie",
            redirect: "/movie/hot"
          },
          {
            path: "hot",
            component: () => import("../views/movie/Hot.vue"),
            meta: { requieAlive: true }
          },
          {
            path: "cinema",
            component: () => import("../views/movie/Cinema.vue"),
            meta: { requieAlive: true }
          },
          {
            path: "wait",
            component: () => import("../views/movie/Wait.vue"),
            meta: { requieAlive: true }
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
        component: () => import("../views/Video.vue"),
        meta: { requireLogin: true, titleName: "猫眼视频", requieAlive: true }
      },
      {
        path: "/minivideo",
        component: () => import("../views/MiniVideo.vue"),
        meta: { requireLogin: true, titleName: "猫眼小视频" }
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
  routes,
  // 处理路由切换时的滚动条
  scrollBehavior(to, from, savedPosition) {
    // savedPosition仅当前进或者后退的时候生效
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// 全局的路由前置守卫
router.beforeEach((to, from, next) => {
  // console.log("to", to);
  // console.log("from", from);
  // next();
  // 如果没有登录，不让进演出页
  // 通过meta元信息一次性的解决多个页面都需要登录的问题
  if (to.meta.requireLogin) {
    if (!localStorage.getItem("token")) {
      next("/login");
    } else {
      if (to.meta.titleName) {
        document.title = to.meta.titleName;
      } else {
        document.title = "小汪的猫眼";
      }
      next();
    }
  } else {
    if (to.meta.titleName) {
      document.title = to.meta.titleName;
    } else {
      document.title = "小汪的猫眼";
    }
    next();
  }
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
