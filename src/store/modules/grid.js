import types from '../types';

export default {
  state: {
    rowsHeight: null,
  },
  mutations: {
    [types.GRID_ROWSHEIGHT_SET](state, { rowsHeight }) {
      state.rowsHeight = rowsHeight;
    },
  },
  actions: {
    setRowsHeight({ commit }, { rowsHeight }) {
      commit(types.GRID_ROWSHEIGHT_SET, { rowsHeight });
    },
  },
};
