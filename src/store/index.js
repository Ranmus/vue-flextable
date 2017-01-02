/* eslint-disable */
import uppercamelcase from 'uppercamelcase';
import Vuex from 'vuex';
import filter from 'utils/filter';
import sort from 'utils/sort';
import types from './types';
import deviceModule from './modules/device';
import dataModule from './modules/data';
import slotsModule from './modules/slots';
import paginatorModule from './modules/paginator';
import selectModule from './modules/select';
import gridModule from './modules/grid';
import filterModule from './modules/filter';

// mutations
const DATA_SORT = 'DATA_SORT';

const createState = () => ({
  config: {
    rowsHeight: null,
  },
  parsedTotal: 0,
  sortable: [],
  sort: {
    name: null,
    order: null,
  },
});

/* eslint-disable no-param-reassign */
const getters = {
  filteredData(state, { filterColumns }, { filterModule, dataModule }) {
    const { data } = dataModule;
    const { text } = filterModule;

    if (text.length) {
      return filter(data, text, filterColumns);
    }

    return data;
  },
  sortedData(state, _getters) {
    const { name, order } = state.sort;

    if (order === null) {
      return _getters.filteredData;
    }

    const reverse = order === 'desc';
    const sorted = sort(_getters.filteredData, name, { reverse });

    return sorted;
  },
  parsedData(state, { sortedData }) {
    return sortedData;
  },
  parsedTotal(state, { parsedData }) {
    return parsedData.length;
  },
  rowsToRender(state, _getters) {
    const { pageSize, side, page, parsedData } = _getters;

    if (side === 'server') {
      return parsedData;
    }

    const offset = (page - 1) * pageSize;

    if (pageSize) {
      return parsedData.slice(offset, offset + pageSize);
    }

    return parsedData;
  },
  sort: state => state.sort,
};

/* eslint-disable no-shadow */
const mutations = {
  [DATA_SORT]: (state, payload) => {
    /* eslint-disable no-shadow */
    const { sort } = state;
    const { name } = payload;

    if (sort.name !== name) {
      sort.name = name;
      sort.order = 'asc';
      return;
    }

    if (sort.order === 'asc') {
      sort.order = 'desc';
      sort.name = name;
    } else if (sort.order === 'desc') {
      sort.order = null;
      sort.name = null;
    } else {
      sort.order = 'asc';
      sort.name = name;
    }
  },
};

const actions = {
  initialize({ commit, dispatch, state }, { columns, config, data, side, slots, url }) {
    commit(types.SLOTS_INIT, slots);
    commit(types.DEVICE_DETECT);

    Object.keys(config).forEach((key) => {
      dispatch(`set${uppercamelcase(key)}`, { [key]: config[key] });
    });

    columns.forEach((column) => {
      if (column.filterable !== false) {
        dispatch('filterAddColumn', { name: column.name });
      }
    });

    if (data) {
      dispatch('setData', { data });
    }

    if (side) {
      dispatch('setSide', { side });
    }

    if (url) {
      dispatch('setURL', { url });
    }

    dispatch('initScreenSizes');
    dispatch('loadData');
  },
  sortBy(context, payload) {
    context.commit('DATA_SORT', {
      name: payload.name,
    });

    if (context.state.side === 'server') {
      context.commit('DATA_LOAD');
    }
  },
};

/* eslint-disable no-undef */
export default () => new Vuex.Store({
  state: createState(),
  getters,
  mutations,
  actions,
  modules: {
    slotsModule,
    dataModule,
    deviceModule,
    paginatorModule,
    selectModule,
    gridModule,
    filterModule,
  },
});
