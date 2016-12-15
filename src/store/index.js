import filter from 'utils/filter';
import sort from 'utils/sort';
import Vuex from 'vuex';
import types from './types';
import deviceModule from './modules/device';
import dataModule from './modules/data';
import slotsModule from './modules/slots';
import limitModule from './modules/limit';
import paginatorModule from './modules/paginator';
import selectModule from './modules/select';

// mutations
const DATA_FILTER = 'DATA_FILTER';
const DATA_SORT = 'DATA_SORT';

const createState = () => ({
  parsedTotal: 0,
  sortable: [],
  searchable: [],
  search: {
    enabled: false,
    text: '',
  },
  sort: {
    name: null,
    order: null,
  },
});

/* eslint-disable no-param-reassign */
const getters = {
  filteredData(state, { data, search, searchable }) {
    if (search.enabled && search.text.length) {
      return filter(data, search.text, searchable);
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
    const { limit, side, pagination, page, parsedData } = _getters;

    if (side === 'server') {
      return parsedData;
    }

    const offset = (page - 1) * limit;

    if (pagination && limit) {
      return parsedData.slice(offset, offset + limit);
    }

    return parsedData;
  },
  search: state => state.search,
  searchable: state => state.searchable,
  sort: state => state.sort,
};

/* eslint-disable no-shadow */
const mutations = {
  [types.CONFIG_INIT]: (state, payload) => {
    const { sortable, searchable } = payload;

    if (sortable) {
      state.sortable = sortable;
    }

    if (searchable) {
      state.searchable = searchable;
    }
  },
  [DATA_FILTER]: (state, payload) => {
    const { search } = state;
    const { text } = payload;

    if (text.length) {
      search.enabled = true;
      search.text = text;
    } else {
      search.enabled = false;
    }
  },
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
  initialize({ commit, dispatch, state }, { config, slots }) {
    const { limit, limits, pagination, side, source, url } = config;
    commit(types.CONFIG_INIT, config);
    commit(types.SLOTS_INIT, slots);
    commit(types.DEVICE_DETECT);

    if (pagination !== undefined) {
      dispatch('setPagination', { pagination });
    }

    if (limit) {
      dispatch('setLimit', { limit });
    }

    if (limits) {
      dispatch('setLimits', { limits });
    }

    if (side) {
      dispatch('setSide', { side });
    }

    if (source) {
      dispatch('setSource', { source });
    }

    if (url) {
      dispatch('setURL', { url });
    }

    dispatch('initScreenSizes');
    dispatch('loadData');
  },
  setSearch(context, payload) {
    const { search } = context.state;
    search.enabled = payload;
  },
  setSearchText(context, payload) {
    context.commit('DATA_FILTER', {
      text: payload,
    });

    if (context.state.side === 'server') {
      context.store('loadData');
    }
  },
  filterBy(context, payload) {
    context.commit('DATA_FILTER', {
      text: payload.text,
    });

    if (context.state.side === 'server') {
      context.commit('DATA_LOAD');
    }
  },
  sortBy(context, payload) {
    context.commit('DATA_SORT', {
      name: payload.name,
    });

    if (context.state.side === 'server') {
      context.commit('DATA_LOAD');
    }
  },
  sync(context, payload) {
    context.commit('DATA_SYNC', payload);

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
    limitModule,
    paginatorModule,
    selectModule,
  },
});
