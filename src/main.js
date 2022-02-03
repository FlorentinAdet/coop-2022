import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import {Outils} from "./mixins/outils.js";
Vue.mixin(Outils);

Vue.prototype.$api = axios.create({
  baseURL : "https://allweb.fun/coop/api/",
  params : {},
  headers: {'Authorization':"428e32d3848d17feec761837184c4d2a7a339eb8"}
});

Vue.prototype.$bus = new Vue();

Vue.prototype.$api.interceptors.request.use(function (config) {
  if(store.state.token){
    config.params.token = store.state.token;
  }
    return config;
})

Vue.config.productionTip = false

Vue.component("Navigation", () => import("@/components/Navigation.vue"))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
