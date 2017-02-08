import filter from 'utils/filter';
import types from '../types';

export default {
  state: {
    text: '',
    columns: new Map(),
  },
  getters: {
    filterText: s => s.text,
    filterColumns: s => s.columns,
    filteredData({ text }, { filterColumns }, { dataModule }) {
      const { data } = dataModule;

      if (text.length) {
        return filter(data, text, filterColumns);
      }

      return data;
    },
    filteredTotal({ text }, { filteredData }) {
      return filteredData.length;
    },
  },
  mutations: {
    [types.FILTER_SET_TEXT](state, { text, name }) {
      console.log(name);
      state.text = text;
    },
    [types.FILTER_ADD_COLUMN]({ columns }, { name }) {
      columns.set(name, null);
    },
  },
  actions: {
    filterSetText({ commit }, { text, name }) {
      commit(types.FILTER_SET_TEXT, { text, name });
    },
    filterAddColumn({ commit }, { name }) {
      commit(types.FILTER_ADD_COLUMN, { name });
    },
  },
};
