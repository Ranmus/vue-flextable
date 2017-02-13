import { push, get, has, remove } from 'utils/stack';
import types from '../types';
/* eslint-disable */
function sort(array, key, options) {
  let smaller = -1;
  let bigger = 1;

  if (options.reverse) {
    smaller = 1;
    bigger = -1;
  }

  if (typeof options.func === 'function') {
    return array.sort((a, b) => {
      let result = options.func(a[key], b[key]);

      if (options.reverse) {
        result = !result;
      }

      return result ? 1 : -1;
    });
  }

  return array.sort((a, b) => {
    if (a[key] < b[key]) return smaller;
    if (a[key] > b[key]) return bigger;
    return 0;
  });
}

function getItem(object, path) {
  const length = path.length;
  let index = 0;

  while(object !== undefined && index < length) {
    object = object[path[index++]];
  }

  return object;
}

export default {
  namespaced: true,
  state: {
    stack: [],
    multiple: false,
  },
  getters: {
    sorted({ stack }, getters, rootState, rootGetters) {
      const filtered = rootGetters['filteredData'];

      if (!stack.length) {
        return filtered;
      }

      const { name, sortBy, order } = stack[0];
      const func = typeof sortBy === 'function' ? sortBy : null;
      const path = typeof sortBy === 'string' ? sortBy.split('.') : null;
      const negator = 1 * (order === 'asc' ? 1 : -1);

      return filtered.sort((prev, next) => {
        if (func) {
          return func(prev[name], next[name]) * negator;
        }

        if (path) {
          if (getItem(prev, path) < getItem(next, path)) return 1 * negator;
          if (getItem(prev, path) > getItem(next, path)) return -1 * negator;
          return 0;
        }

        if (prev[name] < next[name]) return 1 * negator;
        if (prev[name] > next[name]) return -1 * negator;
        return 0;
      });
    },
  },
  mutations: {
    [types.SORT]: ({ multiple, stack }, { column, order, sortBy }) => {
      const { name } = column;

      if (order === false) {
        has({ stack }, name) && remove({ stack }, name);
        return;
      }

      if (has({ stack }, name)) {
        const item = get({ stack }, name);

        if (sortBy) {
          item.sortBy = sortBy || column.sortBy || null;
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
          sortBy: sortBy || column.sortBy || null,
        });
      }
    },
  },
  actions: {
    sort({ commit, state, getters, rootState, rootGetters }, { name, order, sortBy }) {
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
  },
};
