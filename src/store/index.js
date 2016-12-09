import filter from 'utils/filter';
import sort from 'utils/sort';
import Vuex from 'vuex';
import types from './types';
import deviceModule from './modules/device';
import dataModule from './modules/data';
import slotsModule from './modules/slots';

// mutations
const DATA_LOAD = 'DATA_LOAD';
const DATA_FILTER = 'DATA_FILTER';
const DATA_SORT = 'DATA_SORT';

const createState = () => ({
  title: null,
  loaded: false,
  loading: false,
  url: null,
  side: null,
  source: null,
  data: [],
  page: 1,
  total: 0,
  pagination: true,
  limit: 10,
  limits: [10, 20, 30, 50, 100],
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
  filteredData(state) {
    const { data, search, searchable } = state;

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
  rowsToRender(state, _getters) {
    const { limit, side } = state;

    if (side === 'server') {
      return _getters.sortedData;
    }

    if (state.page > _getters.pages) {
      state.page = _getters.pages;
    }

    const offset = (state.page - 1) * limit;

    if (state.pagination && state.limit) {
      return _getters.sortedData.slice(offset, offset + limit);
    }

    return _getters.sortedData;
  },
  dataLoaded: state => state.loaded,
  dataLoading: state => state.loading,
  search: state => state.search,
  // limits
  limit: state => state.limit,
  limits: state => state.limits,
  total(state, _getters) {
    if (state.side === 'server') {
      return state.total;
    }
    return _getters.sortedData.length;
  },
  page: state => state.page,
  pages(state, _getters) {
    return Math.max(Math.ceil(_getters.total / state.limit), 1);
  },
  isFirstPage: state => state.page <= 1,
  isLastPage: state => state.page >= state.pages,
  sort: state => state.sort,
};

/* eslint-disable no-unused-vars */
const mutations = {
  [types.CONFIG_INIT]: (state, payload) => {
    const { url, side, source, limit, limits, pagination, sortable, searchable } = payload;

    state.source = source;
    state.side = side;
    state.url = url;

    if (limits) {
      state.limits = limits;
    }

    if (limit) {
      state.limit = limit;
    }

    if (pagination !== undefined) {
      state.pagination = pagination;
    }

    if (sortable) {
      state.sortable = sortable;
    }

    if (searchable) {
      state.searchable = searchable;
    }
  },
  [DATA_LOAD]: (state) => {
    const { side, source, url } = state;

    if (source) {
      state.data = source;
      state.loading = false;
      state.loaded = true;
    }

    // if (side === 'server') {
    //   if (url) {
    //     const params = {
    //       _page: state.page,
    //       _limit: state.limit,
    //     };

    //     /* eslint-disable no-underscore-dangle */
    //     if (state.sort.name) {
    //       params._sort = state.sort.name;
    //       params._order = state.sort.order.toUpperCase();
    //     }

    //     if (state.search.enabled && state.search.text) {
    //       params.q = state.search.text;
    //       params._page = 1;
    //       state.page = 1;
    //     }

    //     state.loading = true;
    //     axios.get(url, { params }).then((response) => {
    //       state.total = Number(response.headers['x-total-count']);
    //       state.data = response.data;
    //       state.loading = false;
    //       state.loaded = true;
    //     });
    //   }
    // } else if (url) {
    //   state.loading = true;
    //   axios.get(url).then((response) => {
    //     state.data = response.data;
    //     state.loading = false;
    //     state.loaded = true;
    //   });
    // }
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
    commit(types.CONFIG_INIT, config);
    commit(types.SLOTS_INIT, slots);
    commit(types.DEVICE_DETECT);


    dispatch('initScreenSizes');
    dispatch('loadData');
  },
  setSearch(context, payload) {
    const { search } = context.state;
    search.enabled = payload;
  },
  loadData({ state }) {
    if (!state.loading) {
      console.log(state.url);
    }
  },
  setSearchText(context, payload) {
    context.commit('DATA_FILTER', {
      text: payload,
    });

    if (context.state.side === 'server') {
      context.commit('DATA_LOAD');
    }
  },
  setLimit(context, payload) {
    const { state } = context;
    state.limit = Number(payload.limit);
    state.page = 1;

    if (state.side === 'server') {
      context.commit('DATA_LOAD');
    }
  },
  setPage(context, payload) {
    const { state } = context;
    state.page = payload;

    if (state.side === 'server') {
      context.commit('DATA_LOAD');
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
  delete(context, payload) {
    context.commit('DATA_DELETE', payload);

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
  },
});
