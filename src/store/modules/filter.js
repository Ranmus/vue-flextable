/* eslint-disable */
import Vue from 'vue';
import getDeep from 'utils/getDeep';
import types from '../types';

function filter(array, search, filterColumns) {
  const text = String(search).toLowerCase();
  const keys = Object.keys(filterColumns);

  const filterKeys = keys.filter(key => filterColumns[key] !== null);

  return array.filter(item =>
    keys.some((key) => {
      if (filterKeys.every(key => filterColumns[key](item[key])) === false) {
        return false;
      }

      if (Reflect.has(item, key)) {
        if (typeof item[key] === 'object') {
          return Object.keys(item[key]).some((subKey) => {
            const value = String(item[key][subKey]);
            return value.toLowerCase().indexOf(text) !== -1;
          });
        }
        return String(item[key]).toLowerCase().indexOf(text) !== -1;
      }
      return false;
    }),
  );
}

export default {
  namespaced: true,
  state: {
    stack: [],
    rows: [],
    value: null,
  },
  getters: {
    stack: s => s.stack,
    rows: s => s.rows,
    value: s => s.value,
    status() {
      return {};
    },
    filtered(state, { stack, value }, { dataModule }) {
      const { data } = dataModule;
      return data;
    },
  },
  mutations: {
    [types.FILTER](state, { name, callback }) {
      Vue.set(state.columns, name, callback);
      state.idx += 1;
    },
  },
  actions: {
    filter({ commit }, { name, callback }) {
      commit(types.FILTER_COLUMN, { name, callback });
    },
  },
};
