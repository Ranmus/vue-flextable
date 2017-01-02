import types from './../types';

export default {
  state: {
    pageSize: 10,
    limits: [{
      value: 10,
      name: 10,
    }, {
      value: 20,
      name: 20,
    }, {
      value: 30,
      name: 30,
    }, {
      value: 50,
      name: 50,
    }, {
      value: 100,
      name: 100,
    }, {
      value: 0,
      name: 'No limit',
    }],
    page: 1,
  },
  getters: {
    pageSize: s => s.pageSize,
    limits: state => state.limits,
    page: s => s.page,
    pages(state, { pageSize, parsedTotal }) {
      return pageSize ? Math.max(Math.ceil(parsedTotal / pageSize), 1) : 1;
    },
    isFirstPage: s => s.page <= 1,
    isLastPage: s => s.page >= s.pages,
  },
  mutations: {
    [types.LIMITS_SET](state, { limits }) {
      state.limits = limits;
    },
    [types.PAGINATOR_SET_PAGE](state, { page }) {
      state.page = page;
    },
    [types.PAGINATOR_SET_PAGE_SIZE](state, { pageSize }) {
      state.pageSize = pageSize;
    },
  },
  actions: {
    paginatorSetPageSize({ commit, dispatch }, { pageSize }) {
      commit(types.PAGINATOR_SET_PAGE_SIZE, { pageSize });
      dispatch('paginatorSetPage', { page: 1 });
    },
    setLimits({ commit, dispatch }, { limits }) {
      commit(types.LIMITS_SET, { limits });
      dispatch('paginatorSetPage', { page: 1 });
    },
    paginatorNextPage({ commit, state, getters }) {
      const page = Math.min(getters.pages, state.page + 1);
      commit(types.PAGINATOR_SET_PAGE, { page });
    },
    paginatorPreviousPage({ commit, state }) {
      const page = Math.max(1, state.page - 1);
      commit(types.PAGINATOR_SET_PAGE, { page });
    },
    paginatorFirstPage({ commit }) {
      commit(types.PAGINATOR_SET_PAGE, { page: 1 });
    },
    paginatorLastPage({ commit, getters }) {
      commit(types.PAGINATOR_SET_PAGE, { page: getters.pages });
    },
    paginatorSetPage({ commit }, { page }) {
      commit(types.PAGINATOR_SET_PAGE, { page });
    },
  },
};
