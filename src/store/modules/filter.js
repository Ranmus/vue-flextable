import Vue from 'vue';
import filter from 'utils/filter';
import types from '../types';

export default {
  state: {
    idx: 0,
    text: '',
    columns: {},
  },
  getters: {
    filterText: s => s.text,
    filterColumns: s => s.columns,
    filterIdx: s => s.idx,
    filteredData(state, { filterIdx, filterText, filterColumns }, { dataModule }) {
      const { data } = dataModule;

      return filter(data, filterText, filterColumns, filterIdx);
    },
    filteredTotal({ text }, { filteredData }) {
      return filteredData.length;
    },
  },
  mutations: {
    [types.FILTER_SET_TEXT](state, { text }) {
      state.text = text;
    },
    [types.FILTER_ADD_COLUMN]({ columns, columnsNames }, { name }) {
      Vue.set(columns, name, null);
    },
    [types.FILTER_COLUMN](state, { name, callback }) {
      Vue.set(state.columns, name, callback);
      state.idx += 1;
    },
  },
  actions: {
    filterSetText({ commit }, { text }) {
      commit(types.FILTER_SET_TEXT, { text });
    },
    filterAddColumn({ commit }, { name }) {
      commit(types.FILTER_ADD_COLUMN, { name });
    },
    filterColumn({ commit }, { name, callback }) {
      commit(types.FILTER_COLUMN, { name, callback });
    },
  },
};
