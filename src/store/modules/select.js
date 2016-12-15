import types from './../types';

export default {
  state: {
    selected: [],
  },
  getters: {
    selected: state => state.selected,
  },
  mutations: {
    [types.ROW_SELECT]({ selected }, { row }) {
      if (selected.indexOf(row) === -1) {
        selected.push(row);
      }
    },
    [types.ROW_UNSELECT]({ selected }, { row }) {
      const index = selected.indexOf(row);

      if (index !== -1) {
        selected.splice(index, 1);
      }
    },
  },
  actions: {
    toggleSelect({ commit, dispatch, state }, { row }) {
      const { selected } = state;

      if (selected.indexOf(row) === -1) {
        commit(types.ROW_SELECT, { row });
      } else {
        commit(types.ROW_UNSELECT, { row });
      }
    },
    isSelected({ getters }, { row }) {
      return getters.selected.indexOf(row) !== -1;
    },
  },
};
