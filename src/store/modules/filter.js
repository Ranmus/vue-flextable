/* eslint-disable */
import { push, get, has, remove } from 'utils/stack';
import getDeep from 'utils/getDeep';
import types from '../types';

export default {
  namespaced: true,
  state: {
    multiple: true,
    stack: [],
    value: null,
  },
  getters: {
    rows: s => s.rows,
    value: s => s.value,
    stack: s => s.stack,
    status({ stack, value }, { filtered }) {
      const status = {
        filters: {},
        filtered,
        value,
      };
      stack.forEach(({ name, value, filterBy }) => {
        status.filters[name] = {
          value,
          filterBy,
        };
      });
      return status;
    },
    filtered({ stack }, { value }, { dataModule }, rootGetters) {
      const columns = [];
      let { data } = dataModule;

      value = value ? String(value).toLowerCase() : '';

      // Filter by definitions via filter method
      stack.forEach(({ name, value, filterBy }) => {
        const path = typeof filterBy === 'string' ? filterBy.split('.') : null;
        const func = typeof filterBy === 'function' ? filterBy : null;
        value = value ? String(value).toLowerCase() : '';

        data = data.filter((row) => {
          if (func) {
            return func(row);
          } else if (path) {
            return String(getDeep(row, path)).toLowerCase() === value;
          } else {
            return String(row[name]).toLowerCase() === value;
          }
        });
      });

      rootGetters['columns'].forEach(({ name, filterable, filterBy }) => {
        if (name && filterable !== false) {
          columns.push({
            name,
            path: typeof filterBy === 'string' ? filterBy.split('.') : null,
            func: typeof filterBy === 'function' ? filterBy : null,
          });
        }
      });

      // Universal filter
      if (value) {
        let index = 0;
        let result = false;
        let column = null;

        return data.filter((row) => {
          index = 0;
          result = false;

          while (result === false && index < columns.length) {
            column = columns[index++];

            if (column.func) {
              result = column.func(value, row[column.name], row);
            } else if (column.path) {
              result = String(getDeep(row, column.path)).toLowerCase().indexOf(value) !== -1;
            } else {
              result = String(row[column.name]).toLowerCase().indexOf(value) !== -1;
            }
          }

          return result;
        });
      }

      return data;
    },
  },
  mutations: {
    [types.FILTER](state, { name, value, filterBy }) {
      const { multiple, stack } = state;

      if (!name && !filterBy) {
        state.value = value;
        return;
      }

      if (has({ stack }, name) === true) {
        const item = get({ stack }, name);
        if (value === false) {
          remove({ stack }, name);
        } else {
          item.value = value || null;
          item.filterBy = filterBy || null;
        }
      } else {
        if (!value && !filterBy) {
          return;
        }

        push({ multiple, stack }, {
          name,
          value : value || null,
          filterBy: filterBy || null,
        });
      }
    },
  },
  actions: {
    filter({ commit, rootGetters }, { name, value, filterBy } = {}) {
      commit(types.FILTER, { name, value, filterBy });
    },
  },
};
