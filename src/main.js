import Vue from 'vue';
import App from './App.vue';
import svg4everybody from 'svg4everybody';
import './scss/main.scss';

// if svg not supported
svg4everybody();

new Vue({
  render: (h) => h(App)
}).$mount('#app');
