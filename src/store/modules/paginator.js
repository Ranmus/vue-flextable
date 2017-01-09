import types from './../types';

export default {
  state: {
    pageSize: 10,
    pageSizes: [{
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
    page: s => s.page,
    pages(state, { pageSize, parsedTotal }) {
      return pageSize ? Math.max(Math.ceil(parsedTotal / pageSize), 1) : 1;
    },
    pageSize: s => s.pageSize,
    pageOffset(state, { page, pageSize }) {
      return pageSize ? (page - 1) * pageSize : 0;
    },
    pageSizes: s => s.pageSizes,
    isFirstPage: s => s.page <= 1,
    isLastPage: s => s.page >= s.pages,
  },
  mutations: {
    [types.PAGINATOR_SET_PAGE](state, { page }) {
      state.page = page;
    },
    [types.PAGINATOR_SET_PAGE_SIZE](state, { pageSize }) {
      state.pageSize = pageSize;
    },
    [types.PAGINATOR_SET_PAGE_SIZES](state, { pageSizes }) {
      state.pageSizes = pageSizes;
    },
  },
  actions: {
    paginatorSetPageSize({ commit, dispatch }, { pageSize }) {
      commit(types.PAGINATOR_SET_PAGE_SIZE, { pageSize });
      dispatch('paginatorSetPage', { page: 1 });
    },
    paginatorSetPageSizes({ commit, dispatch }, { pageSizes }) {
      commit(types.PAGINATOR_SET_PAGE_SIZES, { pageSizes });
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
