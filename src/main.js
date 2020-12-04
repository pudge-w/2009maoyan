import Vue from "vue";
import App from "./App.vue";

// 引入了路由和vuex
// import router from "./router";
// import store from "./store";

// 引入reset.css
import "./assets/css/reset.scss";

// 引入iconfont
import "./assets/fonts/iconfont.css";

// 引入amfe-flexible，用于设置跟字体大小
import "amfe-flexible";

// 不要生产环境提示
Vue.config.productionTip = false;

new Vue({
  // router: touter,
  // store: store,
  render: h => h(App)
}).$mount("#app");
