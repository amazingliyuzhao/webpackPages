
import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './router/index'
import store from './store/store'

Vue.use(VueRouter);

import './common/css/common.css'

const router = new VueRouter({
  routes: routes
});
new Vue({
  router,store,

}).$mount('#app');