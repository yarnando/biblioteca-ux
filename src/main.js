import Vue from 'vue'
import App from './App.vue'

//Relativos ao Bootstrap Vue 4
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

//Imports relativos ao Vue Router
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);
export const router = new VueRouter({
  routes
});

//Imports relativos ao VueX
import store from './store' 


Vue.config.productionTip = false

new Vue({
    router,
    store,    
  render: function (h) { return h(App) },
}).$mount('#app')
