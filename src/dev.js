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
import ftHeading from 'components/grid/heading/Heading';
import ftHeadingRow from 'components/grid/heading/Row';
import ftHeadingCell from 'components/grid/heading/Cell';
import ftGrid from 'components/grid/Grid';
import ftRow from 'components/grid/Row';
import ftCell from 'components/grid/Cell';
import ftState from 'components/state/State';
import ftSpinner from 'components/state/Spinner';
import ftNoData from 'components/state/NoData';

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
  Vue.component('ftGrid', ftGrid);
  Vue.component('ftHeading', ftHeading);
  Vue.component('ftHeadingRow', ftHeadingRow);
  Vue.component('ftHeadingCell', ftHeadingCell);
  Vue.component('ftRow', ftRow);
  Vue.component('ftCell', ftCell);
  Vue.component('ftState', ftState);
  Vue.component('ftSpinner', ftSpinner);
  Vue.component('ftNoData', ftNoData);
});

/* eslint-disable no-new */
new Vue({
  el: '#example',
  template: '<Example/>',
  components: { Example },
});
