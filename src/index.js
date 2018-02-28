



import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

// Import Flextable
import Flextable from './flextable';

// Import Example
import Example from './components/Example';

// Enable Vuex and Flextable component
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(Flextable);

new Vue({
  el: '#app',
  render: h => h(Example),
});
