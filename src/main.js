import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
// global register at main.js
import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);

Vue.config.productionTip = false;

const requireComponent = require.context(
  './components/global',
  true,
  /\.(js|vue)$/i
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
