import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import bootstrap from './bootstrap';

import './assets/scss/theme.scss';
import './assets/fonts/feather/feather.css';
import 'bootstrap/dist/js/bootstrap';

Vue.use(bootstrap);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
