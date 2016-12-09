const axios = require('axios');

const DATA_DELETE = 'DATA_DELETE';
const DATA_SYNC = 'DATA_SYNC';

/* eslint-disable no-param-reassign */
export default {
  mutations: {
    [DATA_DELETE]: (state, payload) => {
      const { url, data } = state;
      const { row } = payload;

      axios.delete(url + row.id).then(() => {
        data.splice(data.indexOf(row), 1);
      });
    },
    [DATA_SYNC]: (state, payload) => {
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
  },
};
