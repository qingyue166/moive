import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

// 使用懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2178388004,3274002109&fm=26&gp=0.jpg'
});

// 定义事件总线（后续需要使用的）
Vue.prototype.eventBus = new Vue();

// 导入vuex的store对象
import store from '@/store/vuex'

// 同步一下localStorage数据到Vuex
let _token = localStorage.getItem("_token");
if (_token) {
    store.commit("updateToken", _token);
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
