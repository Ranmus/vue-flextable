/* eslint-disable no-undef */
import Flextable from 'components/Flextable';
import ftHeader from 'components/header/Header';
import ftTitle from 'components/header/Title';
import ftFilter from 'components/header/Filter';
import ftFooter from 'components/footer/Footer';
import ftPaginator from 'components/footer/Paginator';
import ftGrid from 'components/grid/Grid';
import ftHeading from 'components/grid/heading/Heading';
import ftHeadingRow from 'components/grid/heading/Row';
import ftHeadingCell from 'components/grid/heading/Cell';
import ftRow from 'components/grid/Row';
import ftCell from 'components/grid/Cell';

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
});
