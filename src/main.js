import './styles/style.scss';

import './aframe/components/aframe-ar-register-events-component.js';

import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
})
