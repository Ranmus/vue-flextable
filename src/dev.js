import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import Example from 'components/Dev';
import Flextable from 'components/Flextable';
import ftHeader from 'components/header/Header';
import ftTitle from 'components/header/Title';
import ftFilter from 'components/header/Filter';
import ftFooter from 'components/footer/Footer';
import ftPaginator from 'components/footer/Paginator';

// Enable Vuex and Flextable component
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(() => {
  Vue.component('flextable', Flextable);
  Vue.component('ftHeader', ftHeader);
  Vue.component('ftTitle', ftTitle);
  Vue.component('ftFilter', ftFilter);
  Vue.component('ftFooter', ftFooter);
  Vue.component('ftPaginator', ftPaginator);
});

/* eslint-disable no-new */
new Vue({
  el: '#example',
  template: '<Example/>',
  components: { Example },
});
