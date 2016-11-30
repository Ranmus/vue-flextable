import Vue from 'vue';
import Vuex from 'vuex';
import Example from 'components/Dev';
import Flextable from 'components/Flextable';

// Enable Vuex and Flextable component
Vue.use(Vuex);
Vue.component('flextable', Flextable);

/* eslint-disable no-new */
new Vue({
  el: '#example',
  template: '<Example/>',
  components: { Example },
});
