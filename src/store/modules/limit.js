import types from './../types';

export default {
  state: {
    limit: 10,
    limits: [10, 20, 30, 50, 100],
  },
  getters: {
    limit: state => state.limit,
    limits: state => state.limits,
  },
  mutations: {
    [types.LIMIT_SET](state, { limit }) {
      state.limit = limit;
    },
    [types.LIMITS_SET](state, { limits }) {
      state.limits = limits;
    },
  },
  actions: {
    setLimit({ commit, dispatch }, { limit }) {
      commit(types.LIMIT_SET, { limit });
      dispatch('setPage', { page: 1 });
    },
    setLimits({ commit, dispatch }, { limits }) {
      commit(types.LIMITS_SET, { limits });
      dispatch('setPage', { page: 1 });
    },
  },
};
