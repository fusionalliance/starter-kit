import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

export default {
  routes: [
    { path: '/', component: Home },
    { path: '*', component: NotFound },
  ],
};
