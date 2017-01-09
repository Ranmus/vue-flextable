import sort from 'utils/sort';
import types from '../types';

/* eslint-disable no-shadow */
export default {
  state: {
    sortable: [],
    sort: {
      name: null,
      order: null,
      func: null,
    },
  },
  getters: {
    sortedData(state, { filteredData }) {
      const { name, order, func } = state.sort;

      if (order === null) {
        return filteredData;
      }

      const reverse = order === 'desc';
      const sorted = sort(filteredData, name, { reverse, func });

      return sorted;
    },
    sort: s => s.sort,
  },
  mutations: {
    [types.SORT_SET_FIELD]: ({ sort }, { name, func }) => {
      if (sort.name !== name) {
        sort.name = name;
        sort.order = 'asc';
        sort.func = func || null;
        return;
      }

      if (sort.order === 'asc') {
        sort.order = 'desc';
        sort.name = name;
        sort.func = func;
      } else if (sort.order === 'desc') {
        sort.order = null;
        sort.name = null;
        sort.func = null;
      } else {
        sort.order = 'asc';
        sort.name = name;
        sort.func = func || null;
      }
    },
  },
  actions: {
    sortSetField({ commit, state }, { name, func }) {
      commit(types.SORT_SET_FIELD, { name, func });

      if (state.side === 'server') {
        commit('DATA_LOAD');
      }
    },
  },
};
