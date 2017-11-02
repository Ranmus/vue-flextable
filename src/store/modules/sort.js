import { push, get, has, remove } from 'utils/stack';
import getDeep from 'utils/getDeep';
import types from '../types';

/* eslint-disable no-plusplus */
export default () => ({
  namespaced: true,
  state: {
    caseSensitive: true,
    multiple: true,
    stack: [],
  },
  getters: {
    caseSensitive: s => s.caseSensitive,
    multiple: s => s.multiple,
    stack: s => s.stack,
    status({ stack }) {
      const status = {};
      stack.forEach(({ name, order, sortBy }) => {
        status[name] = {
          order,
          sortBy,
        };
      });
      return status;
    },
    sorted({ stack }, getters, rootState, rootGetters) {
      const caseSensitive = getters.caseSensitive;
      const filtered = rootGetters['filter/filtered'];
      const sorters = [];

      if (!stack.length) {
        return filtered;
      }

      stack.forEach(({ name, order, sortBy }) => {
        sorters.push({
          name,
          func: typeof sortBy === 'function' ? sortBy : null,
          path: typeof sortBy === 'string' ? sortBy.split('.') : null,
          negator: 1 * (order === 'asc' ? 1 : -1),
        });
      });

      let index = 0;
      let result = 0;
      let sorter = null;

      return filtered.sort((prev, next) => {
        index = 0;
        result = 0;

        while (result === 0 && index < sorters.length) {
          sorter = sorters[index++];

          if (sorter.func) {
            result = sorter.func(prev[sorter.name], next[sorter.name], prev, next) * sorter.negator;
          } else if (sorter.path) {
            const p = caseSensitive ? getDeep(prev, sorter.path)
              : String(getDeep(prev, sorter.path)).toLowerCase();
            const n = caseSensitive ? getDeep(next, sorter.path)
              : String(getDeep(next, sorter.path)).toLowerCase();
            if (p < n) {
              result = sorter.negator;
            } else if (p > n) {
              result = -sorter.negator;
            } else {
              result = 0;
            }
          } else {
            const p = caseSensitive ? prev[sorter.name] : String(prev[sorter.name]).toLowerCase();
            const n = caseSensitive ? next[sorter.name] : String(next[sorter.name]).toLowerCase();

            if (p < n) {
              result = sorter.negator;
            } else if (p > n) {
              result = -sorter.negator;
            } else {
              result = 0;
            }
          }
        }

        return result;
      });
    },
  },
  mutations: {
    [types.SORT_SET_MULTIPLE](state, { multiple }) {
      state.multiple = multiple;
    },
    [types.SORT_SET_CASE_SENSITIVE](state, { caseSensitive }) {
      state.caseSensitive = caseSensitive;
    },
    [types.SORT]: ({ multiple, stack }, { column, order, sortBy }) => {
      const { name } = column;

      if (order === false) {
        if (has({ stack }, name)) {
          remove({ stack }, name);
        }
        return;
      }

      if (has({ stack }, name) === true) {
        const item = get({ stack }, name);

        if (sortBy) {
          item.sortBy = sortBy || column.sortBy || null;
        }

        if (order) {
          item.order = order;
        } else if (item.order === 'asc') {
          item.order = 'desc';
        } else if (item.order === 'desc') {
          remove({ stack }, name);
        }
      } else {
        push({ multiple, stack }, {
          name,
          order: order || 'asc',
          sortBy: sortBy || column.sortBy || null,
        });
      }
    },
  },
  actions: {
    sort({ commit, state, getters, rootState, rootGetters }, { name, order, sortBy } = {}) {
      const { columns } = rootGetters;
      const column = columns.find(column => column.name === name);

      if (!name || !column) {
        return;
      }

      if (column.sortable === false) {
        return;
      }

      commit(types.SORT, { column, order, sortBy });

      if (state.side === 'server') {
        commit('DATA_LOAD');
      }
    },
    setMultiple({ commit }, { multiple } = {}) {
      commit(types.SORT_SET_MULTIPLE, { multiple });
    },
    setCaseSensitive({ commit }, { caseSensitive } = {}) {
      commit(types.SORT_SET_CASE_SENSITIVE, { caseSensitive });
    },
  },
});
