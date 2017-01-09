import filter from 'utils/filter';
import types from '../types';

export default {
  state: {
    text: '',
    columns: [],
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
    [types.FILTER_SET_TEXT](state, { text }) {
      state.text = text;
    },
    [types.FILTER_ADD_COLUMN]({ columns }, { name }) {
      columns.push(name);
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
