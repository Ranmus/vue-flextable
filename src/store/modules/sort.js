import { push, get, has, remove } from 'utils/stack';
import sort from 'utils/sort';
import types from '../types';


/* eslint-disable */
export default {
  namespaced: true,
  state: {
    stack: [],
    multiple: true,
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
    [types.SORT]: ({ multiple, stack }, { column, order, func }) => {
      const { name } = column;

      if (order === false) {
        has({ stack }, name) && remove({ stack }, name);
        return;
      }

      if (has({ stack }, name)) {
        const item = get({ stack }, name);

        if (func) {
          item.func = func || column.sortFunction || null;
        }

        if (order) {
          item.order = order;
        } else if (item.order === 'asc')  {
          item.order = 'desc';
        } else if (item.order === 'desc') {
          remove({ stack }, name);
        }
      } else {
        push({ multiple, stack }, {
          name,
          order: order || 'asc',
          func: func || column.sortFunction || null,
        });
      }

      stack.forEach((item) => {
        console.log(`${item.name}: ${item.order}`, item.func);
      });

      if (stack.length === 0) {
        console.log(null);
      }
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
      const { columns } = rootGetters;
      const column = columns.find(column => column.name === name);

      if (!name || !column) {
        return;
      }

      if (column.sortable === false) {
        return;
      }

      commit(types.SORT, { column, order, func });

      if (state.side === 'server') {
        commit('DATA_LOAD');
      }
    },
  },
};
