import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueRouter from 'vue-router'
import Routes from './ruotes'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  store: store,
  render: h => h(App),
  router: router
}).$mount('#app')
