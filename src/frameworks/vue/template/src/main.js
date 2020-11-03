import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import components from './components';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

Object.keys(components).forEach((name) => {
  Vue.component(name, components[name]);
});

const router = new VueRouter(routes);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
