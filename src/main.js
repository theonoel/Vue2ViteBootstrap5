import Vue from 'vue';
import App from './App.vue';
//import 'bootstrap'; for JS
import './scss/main.scss';
import './scss/cheatsheet.scss';



new Vue({
  render: (h) => h(App)
}).$mount('#app');
