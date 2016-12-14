import types from './../types';

export default {
  state: {
    page: 1,
    pagination: true,
  },
  getters: {
    page: s => s.page,
    pages(state, { limit, parsedTotal }) {
      return Math.max(Math.ceil(parsedTotal / limit), 1);
    },
    isFirstPage: s => s.page <= 1,
    isLastPage: s => s.page >= s.pages,
    pagination: s => s.pagination,
  },
  mutations: {
    [types.PAGE_SET](state, { page }) {
      state.page = page;
    },
    [types.PAGINATION_SET](state, { pagination }) {
      state.pagination = pagination === true;
    },
  },
  actions: {
    setPage({ commit }, { page }) {
      commit(types.PAGE_SET, { page });
    },
    setPagination({ commit }, { pagination }) {
      commit(types.PAGINATION_SET, { pagination });
    },
  },
};
