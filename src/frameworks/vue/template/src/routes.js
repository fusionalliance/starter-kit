import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

export default {
  routes: [
    { path: '/', component: Home },
    { path: '*', component: NotFound },
  ],
};
