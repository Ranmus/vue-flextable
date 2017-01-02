import types from '../types';

export default {
  state: {
    text: '',
    columns: [],
  },
  getters: {
    filterText: s => s.text,
    filterColumns: s => s.columns,
    filteredTotal(s, { filteredData }) {
      return s.text ? filteredData.length : null;
    },
  },
  mutations: {
    [types.FILTER_SET_TEXT](s, { text }) {
      s.text = text;
    },
    [types.FILTER_ADD_COLUMN](s, { name }) {
      s.columns.push(name);
    },
  },
  actions: {
    filterSetText({ commit }, { text }) {
      commit(types.FILTER_SET_TEXT, { text });
    },
    filterAddColumn({ commit }, { name }) {
      commit(types.FILTER_ADD_COLUMN, { name });
    },
  },
};
