import Flextable from './components/Flextable';
import ftHeader from './components/header/Header';
import ftTitle from './components/header/Title';
import ftFilter from './components/header/Filter';
import ftFooter from './components/footer/Footer';
import ftPaginator from './components/footer/Paginator';
import ftGrid from './components/grid/Grid';
import ftHeading from './components/grid/heading/Heading';
import ftHeadingRow from './components/grid/heading/Row';
import ftHeadingCell from './components/grid/heading/Cell';
import ftRow from './components/grid/Row';
import ftCell from './components/grid/Cell';
import ftState from './components/state/State';
import ftSpinner from './components/state/Spinner';
import ftNoData from './components/state/NoData';

const Components = {
  Flextable,
  ftHeader,
  ftTitle,
  ftFilter,
  ftFooter,
  ftPaginator,
  ftGrid,
  ftHeading,
  ftHeadingRow,
  ftHeadingCell,
  ftRow,
  ftCell,
  ftState,
  ftSpinner,
  ftNoData,
  install(Vue) {
    const keys = Reflect.ownKeys(this);
    keys.pop();
    keys.forEach((key) => {
      Vue.component(key, this[key]);
    });
  },
};

if (window && window.Vue) {
  window.Vue.use(Components);
}

module.exports = Components;
