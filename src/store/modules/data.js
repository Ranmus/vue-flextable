import Vue from 'vue';
import types from '../types';

/* eslint-disable no-param-reassign */
export default {
  state: {
    loaded: false,
    loading: false,
    data: [],
    total: 0,
    source: null,
    url: null,
    side: 'client',
  },
  getters: {
    loaded: s => s.loaded,
    loading: s => s.loading,
    url: s => s.url,
    side: s => s.side,
    total: s => (s.side === 'server' ? s.total : s.data.length),
  },
  mutations: {
    [types.DATA_SIDE_SET](state, { side }) {
      state.side = side;
    },
    [types.DATA_DATA_SET](state, { data }) {
      state.data = data;
    },
    [types.DATA_URL_SET](state, { url }) {
      state.url = url;
    },
    [types.DATA_LOADING](state) {
      state.loading = true;
    },
    [types.DATA_LOADED](state, { data }) {
      state.data = data;
      state.loading = false;
      state.loaded = true;
    },
    [types.DATA_DELETE]({ url, data }, { row }) {
      data.splice(data.indexOf(row), 1);
    },
    [types.DATA_TOTAL_SET](state, { total }) {
      state.total = total;
    },
  },
  actions: {
    delete({ commit, getters }, { row }) {
      const { url, side } = getters;

      return Vue.http.delete(url + row.id).then(() => {
        commit('DATA_DELETE', { row });

        if (side === 'server') {
          commit('DATA_LOAD');
        }
      });
    },
    setSide({ commit }, { side }) {
      commit(types.DATA_SIDE_SET, { side });
    },
    setData({ commit }, { data }) {
      commit(types.DATA_DATA_SET, { data });
    },
    setURL({ commit }, { url }) {
      commit(types.DATA_URL_SET, { url });
    },
    sync({ state, rootState, dispatch }, { row }) {
      const { data, url } = state;
      const { selected } = rootState.selectModule;
      const id = Number.isInteger(row) ? row : Number(row.id);
      const found = data.find(row_ => Number(row_.id) === id);

      return new Promise((resolve, reject) => {
        Vue.http.get(url + id).then((response) => {
          if (found) {
            data.splice(data.indexOf(found), 1, response.data);
            resolve({ state: 'updated', row: found });
          } else {
            data.push(response.data);
            resolve({ state: 'created', row: response.data });
          }
        }, ({ status }) => {
          if (status === 404 && found) {
            data.splice(data.indexOf(found), 1);
            if (selected.indexOf(row) !== -1) {
              dispatch('toggleSelect', { row });
            }
            resolve({ state: 'deleted', row });
          }
          reject({ state: 'error', row });
        });
      });
    },
    loadData({ commit, getters }) {
      const { loading, side, source, url, page, limit, sort, search } = getters;

      if (!source && !side) {
        console.log('No data provided.');
        return;
      }

      if (side && !url) {
        console.log('No url for data defined.');
        return;
      }

      if (loading) {
        return;
      }

      commit(types.DATA_LOADING);

      if (source) {
        commit(types.DATA_LOADED, { data: source });
        return;
      }

      if (side === 'server') {
        const params = {
          _page: page,
          _limit: limit,
        };

        /* eslint-disable no-underscore-dangle */
        if (sort.name) {
          params._sort = sort.name;
          params._order = sort.order.toUpperCase();
        }

        if (search.enabled && search.text) {
          params.q = search.text;
          params._page = 1;
          commit(types.PAGE_SET, { page: 1 });
        }

        Vue.http.get(url, { params }).then(({ data, headers }) => {
          const total = Number(headers['x-total-count']);
          commit(types.DATA_TOTAL_SET, { total });
          commit(types.DATA_LOADED, { data });
        });
        return;
      }

      Vue.http.get(url).then(({ data, status }) => {
        if (status === 200) {
          commit(types.DATA_LOADED, { data });
        } else {
          console.log(`Bad response occured while getting data. Status: ${status}; url {$url}`);
        }
      });
    },
  },
};
