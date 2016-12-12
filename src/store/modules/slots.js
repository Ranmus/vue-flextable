import Vue from 'vue';
import types from './../types';

/* eslint-disable no-param-reassign */
export default {
  state: {
    slots: {
      named: {},
      scoped: {},
    },
  },
  getters: {
    slots: s => s.slots,
  },
  mutations: {
    [types.SLOTS_INIT]({ slots }, { named, scoped }) {
      Reflect.ownKeys(named).forEach((key) => {
        Vue.set(slots.named, key, named[key]);
      });

      Reflect.ownKeys(scoped).forEach((key) => {
        Vue.set(slots.scoped, key, scoped[key]);
        slots.scoped[key] = scoped[key];
      });
    },
  },
};
