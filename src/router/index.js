import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入路由模块
import centerRouter from '@/router/routers/center'
import cinemaRouter from '@/router/routers/cinema'
import filmRouter from '@/router/routers/film'
import detailRouter from '@/router/routers/detail'
import cityRouter from '@/router/routers/city'
import loginRouter from '@/router/routers/login'

const routes = [
  {
    path: '/',
    redirect: '/film'
  },
  filmRouter,
  cinemaRouter,
  centerRouter,
  detailRouter,
  cityRouter,
  loginRouter,
  // 注册路由
  // ...authRouter,
]

const router = new VueRouter({
  // mode: 'history',
  // 前缀暂时可以不用使用
  // base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  let arr = [
    // 存需要登录的页面地址
    "/cinema",
  ];
  if (arr.includes(to.path)) {
    // 返回真则在（需要登录判断）
    if (localStorage.getItem("_token")) {
      next();
    } else {
      next({ path: "/login", query: { refer: encodeURI(to.fullPath) } });
    }
  } else {
    // 不在（不需要登录判断）
    next();
  }
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

export default router
