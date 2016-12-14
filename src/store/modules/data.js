import types from '../types';

const axios = require('axios');

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
    data: s => s.data,
    source: s => s.source,
    url: s => s.url,
    side: s => s.side,
    total({ total }, { data, side }) {
      if (side === 'server') {
        return total;
      }

      return data.length;
    },
  },
  mutations: {
    [types.DATA_SIDE_SET](state, { side }) {
      state.side = side;
    },
    [types.DATA_SOURCE_SET](state, { source }) {
      state.source = source;
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
    [types.DATA_SYNC](state, payload) {
      const { url, data } = state;
      const { row } = payload;

      if (typeof row === 'number') {
        const id = Number(row);
        axios.get(url + id).then((response) => {
          const found = data.find(row_ => Number(row_.id) === id);

          if (found) {
            data.splice(data.indexOf(found), 1, response.data);
          } else {
            data.push(response.data);
          }
        });
      } else {
        axios.get(url + row.id).then((response) => {
          data.splice(data.indexOf(row), 1, response.data);
        });
      }
    },
    [types.DATA_TOTAL_SET](state, { total }) {
      state.total = total;
    },
  },
  actions: {
    delete({ commit, getters }, { row }) {
      const { url, side } = getters;

      return axios.delete(url + row.id).then(() => {
        commit('DATA_DELETE', { row });

        if (side === 'server') {
          commit('DATA_LOAD');
        }
      });
    },
    setSide({ commit }, { side }) {
      commit(types.DATA_SIDE_SET, { side });
    },
    setSource({ commit }, { source }) {
      commit(types.DATA_SOURCE_SET, { source });
    },
    setURL({ commit }, { url }) {
      commit(types.DATA_URL_SET, { url });
    },
    loadData({ commit, getters }) {
      const { loaded, loading, side, source, url, page, limit, sort, search } = getters;
      if (loaded && (source || side === 'client')) {
        return;
      }

      if (loading) {
        return;
      }

      commit(types.DATA_SOURCE_LOADING);

      if (source) {
        commit(types.DATA_LOADED, { data: source });
        return;
      }

      if (!url) {
        console.log('No data source, define url or source parameter.');
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

        axios.get(url, { params }).then(({ data, headers }) => {
          const total = Number(headers['x-total-count']);
          commit(types.DATA_TOTAL_SET, { total });
          commit(types.DATA_LOADED, { data });
        });
        return;
      }

      axios.get(url).then(({ data, status }) => {
        if (status === 200) {
          commit(types.DATA_LOADED, { data });
        } else {
          console.log(`Bad response occured while getting data. Status: ${status}; url {$url}`);
        }
      });
    },
  },
};
