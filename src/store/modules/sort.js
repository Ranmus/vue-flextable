import sort from 'utils/sort';
import types from '../types';

/* eslint-disable no-shadow */
export default {
  state: {
    sortable: [],
    sort: {
      name: null,
      order: null,
    },
  },
  getters: {
    sortedData(state, { filteredData }) {
      const { name, order } = state.sort;

      if (order === null) {
        return filteredData;
      }

      const reverse = order === 'desc';
      const sorted = sort(filteredData, name, { reverse });

      return sorted;
    },
    sort: s => s.sort,
  },
  mutations: {
    [types.SORT_DATA]: ({ sort }, { name }) => {
      if (sort.name !== name) {
        sort.name = name;
        sort.order = 'asc';
        return;
      }

      if (sort.order === 'asc') {
        sort.order = 'desc';
        sort.name = name;
      } else if (sort.order === 'desc') {
        sort.order = null;
        sort.name = null;
      } else {
        sort.order = 'asc';
        sort.name = name;
      }
    },
  },
  actions: {
    sortBy({ commit, state }, { name }) {
      commit(types.SORT_DATA, { name });

      if (state.side === 'server') {
        commit('DATA_LOAD');
      }
    },
  },
};
