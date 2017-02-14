import uppercamelcase from 'uppercamelcase';
import Vuex from 'vuex';
import types from './types';
import deviceModule from './modules/device';
import dataModule from './modules/data';
import slotsModule from './modules/slots';
import paginatorModule from './modules/paginator';
import selectModule from './modules/select';
import gridModule from './modules/grid';
import filter from './modules/filter';
import sort from './modules/sort';

const createState = () => ({
  config: {
    rowsHeight: null,
  },
  columns: [],
});

/* eslint-disable */
const getters = {
  config: s => s.config,
  columns: s => s.columns,
  parsedData(state, getters, rootState, rootGetters) {
    return rootGetters['sort/sorted'];
  },
  parsedTotal(state, { parsedData }) {
    return parsedData.length;
  },
  rowsToRender(state, _getters) {
    const { pageSize, side, parsedData, pageOffset } = _getters;

    if (side === 'server') {
      return parsedData;
    }

    if (pageSize) {
      return parsedData.slice(pageOffset, pageOffset + pageSize);
    }

    return parsedData;
  },
};

const mutations = {
  [types.COLUMNS_SET](state, { columns }) {
    state.columns = columns;
  },
};

const actions = {
  initialize({ commit, dispatch, state }, { columns, config, data, side, slots, url }) {
    commit(types.SLOTS_INIT, slots);
    commit(types.DEVICE_DETECT);

    Object.keys(config).forEach((key) => {
      dispatch(`set${uppercamelcase(key)}`, { [key]: config[key] });
    });

    commit(types.COLUMNS_SET, { columns });

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
  /* configuration setters */
  setPageSize({ dispatch }, { pageSize }) {
    dispatch('paginatorSetPageSize', { pageSize });
  },
  setPageSizes({ dispatch }, { pageSizes }) {
    dispatch('paginatorSetPageSizes', { pageSizes });
  },
  setMultiSelect({ dispatch }, { multiSelect }) {
    dispatch('selectSetMultiSelect', { multiSelect });
  },
  setMultiSort({ dispatch }, { multiSort }) {
    dispatch('sort/setMultiple', { multiple: multiSort });
  }
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
    filter,
    sort,
  },
});
