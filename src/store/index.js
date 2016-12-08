import MediaQuery from 'utils/MediaQuery';
import filter from 'utils/filter';
import sort from 'utils/sort';

const Vuex = require('vuex');
const axios = require('axios');
const isMobile = require('ismobilejs');

// mutations
const DATA_LOAD = 'DATA_LOAD';
const DATA_DELETE = 'DATA_DELETE';
const DATA_RELOAD = 'DATA_RELOAD';
const DATA_FILTER = 'DATA_FILTER';
const DATA_SORT = 'DATA_SORT';

const createState = () => ({
  mq: new MediaQuery(),
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
  slots: {
  },
  scopedSlots: {
    pagesize: null,
    paginator: null,
  },
  classes: {
    mobile: null,
    device: 'ft-desktop',
    size: null,
  },
  device: {
    name: 'desktop',
    isDesktop: true,
    isMobile: false,
    isPhone: false,
    isTablet: false,
  },
  screenSize: null,
  screenSizes: {
    small: 'only screen and (max-width: 600px)',
    medium: 'only screen and (min-width: 601px) and (max-width: 992px)',
    large: 'only screen and (min-width: 993px)',
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
  scopedSlots: state => state.scopedSlots,
  slots: state => state.slots,
  // classes
  mobileClass: state => state.classes.mobile,
  deviceClass: state => state.classes.device,
  sizeClass: state => state.classes.size,
  // device
  device: state => state.device.name,
  size: state => state.screenSize,
  isMobile: state => state.device.isMobile,
  isPhone: state => state.device.isPhone,
  isTablet: state => state.device.isTablet,
  isDesktop: state => state.device.isDesktop,
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

const mutations = {
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

  [DATA_DELETE]: (state, payload) => {
    const { url, data } = state;
    const { row } = payload;

    axios.delete(url + row.id).then(() => {
      data.splice(data.indexOf(row), 1);
    });
  },
  [DATA_RELOAD]: (state, payload) => {
    const { url, data } = state;
    const { row } = payload;

    if (typeof row === 'number') {
      const id = Number(row);
      axios.get(url + id).then((response) => {
        const found = data.find(row => Number(row.id) === id);

        if (found) {
          data.splice(data.indexOf(found), 1, response.data);
        } else {
          data.push(response.data);
        }
      });
    } else {
      axios.get(url + row.id).then((response) => {
        data.splice(data.indexOf(row), 1, response.data);
      });
    }
  },
  [DATA_LOAD]: (state) => {
    const { side, source, url } = state;

    if (source) {
      state.data = source;
      state.loading = false;
      state.loaded = true;
      return;
    }

    if (side === 'server') {
      if (url) {
        const params = {
          _page: state.page,
          _limit: state.limit,
        };

        /* eslint-disable no-underscore-dangle */
        if (state.sort.name) {
          params._sort = state.sort.name;
          params._order = state.sort.order.toUpperCase();
        }

        if (state.search.enabled && state.search.text) {
          params.q = state.search.text;
          params._page = 1;
          state.page = 1;
        }

        state.loading = true;
        axios.get(url, { params }).then((response) => {
          state.total = Number(response.headers['x-total-count']);
          state.data = response.data;
          state.loading = false;
          state.loaded = true;
        });
      }
    } else if (url) {
      state.loading = true;
      axios.get(url).then((response) => {
        state.data = response.data;
        state.loading = false;
        state.loaded = true;
      });
    }
  },
};

const actions = {
  loadConfig(context, payload) {
    const { url, side, source, limit, limits, pagination, sortable, searchable } = payload;
    const { state } = context;

    state.url = url;
    state.side = side;
    state.source = source;

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
  loadData(context) {
    context.commit(DATA_LOAD);
  },
  readSlots(context, payload) {
    const slots = context.state.slots;

    Reflect.ownKeys(payload).forEach((key) => {
      slots[key] = payload[key];
    });
  },
  readScopedSlots(context, payload) {
    const scopedSlots = context.state.scopedSlots;

    Reflect.ownKeys(payload).forEach((key) => {
      scopedSlots[key] = payload[key];
    });
  },
  detectDevice(context) {
    const { device, classes } = context.state;

    if (isMobile.any) {
      device.isDesktop = false;
      device.isMobile = true;
      device.name = 'mobile';
      classes.mobile = 'ft-mobile';
    }

    if (isMobile.phone) {
      device.isPhone = true;
      device.isTablet = false;
      device.name = 'phone';
      classes.device = 'ft-phone';
    }

    if (isMobile.tablet) {
      device.isPhone = false;
      device.isTablet = true;
      device.name = 'tablet';
      classes.device = 'ft-tablet';
    }
  },
  loadScreenSizes(context, payload) {
    const { dispatch, state } = context;
    const definitions = payload || state.screenSizes;

    if (payload) {
      state.screenSizes = {};
    }

    Reflect.ownKeys(definitions).forEach((key) => {
      dispatch('addScreenSize', {
        name: key,
        mediaQuery: definitions[key],
      });
    });

    state.mq.check();
  },
  addScreenSize(context, payload) {
    const { mq, classes, screenSizes } = context.state;
    const { name, mediaQuery } = payload;

    screenSizes[name] = mediaQuery;

    mq.on(mediaQuery, () => {
      classes.size = `ft-size-${name}`;
      context.state.screenSize = name;
    });
  },
  clearScreenSizes(context) {
    const { state } = context;
    state.mq.off();
    state.screenSize = null;
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
  reload(context, payload) {
    context.commit('DATA_RELOAD', payload);

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
});
