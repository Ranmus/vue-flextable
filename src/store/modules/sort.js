import sort from 'utils/sort';
import types from '../types';
import LimitedStackMap from '../../utils/LimitedStackMap';

/* eslint-disable */
export default {
  namespaced: true,
  state: {
    multi: false,
    stack: new LimitedStackMap(1),
  },
  getters: {
    sorted(state, getters, rootState, rootGetters) {
      const filtered = rootGetters['filteredData'];

      return filtered;
      const { name, order, func } = state.sort;

      if (order === null) {
        return filtered;
      }

      const reverse = order === 'desc';
      const sorted = sort(filtered, name, { reverse, func });

      return sorted;
    },
    sort: s => s.sort,
  },
  mutations: {
    [types.SORT]: ({ stack }, { name, order, func }) => {
      console.log(name, order, func);

      return;
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
    sort({ commit, state, getters, rootState, rootGetters }, { name, order, func }) {
      const { stack } = state;
      const { columns } = rootGetters;
      let item = null;

      if (!stack.has(name)) {
        const column = columns.find(column => column.name === name);

        if (!column || column.sortable === false) {
          return;
        }

        commit(types.SORT, {
          name,
          order: 'asc',
          func: column.sortFunction || func,
        });
      } else {

      }



      // console.log(name, order, func);
      return;
      commit(types.SORT, { name, func });

      if (state.side === 'server') {
        commit('DATA_LOAD');
      }
    },
  },
};
