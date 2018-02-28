import types from '../types';

export default () => ({
  state: {
    multiSelect: true,
    selected: [],
  },
  getters: {
    selected: s => s.selected,
    multiSelect: s => s.multiSelect,
  },
  mutations: {
    [types.SELECT_SELECT_ROW]({ selected }, { row }) {
      if (selected.indexOf(row) === -1) {
        selected.push(row);
      }
    },
    [types.SELECT_UNSELECT_ROW]({ selected }, { row }) {
      const index = selected.indexOf(row);

      if (index !== -1) {
        selected.splice(index, 1);
      }
    },
    [types.SELECT_SET_MULTISELECT](state, { multiSelect }) {
      state.multiSelect = multiSelect;
    },
  },
  actions: {
    toggleSelect({ commit, dispatch, state }, { row }) {
      const { selected } = state;
      const { SELECT_SELECT_ROW, SELECT_UNSELECT_ROW } = types;

      commit(selected.indexOf(row) === -1 ? SELECT_SELECT_ROW : SELECT_UNSELECT_ROW, { row });
    },
    isSelected({ getters }, { row }) {
      return getters.selected.indexOf(row) !== -1;
    },
    selectSetMultiSelect({ commit }, { multiSelect }) {
      commit(types.SELECT_SET_MULTISELECT, { multiSelect });
    },
  },
});
