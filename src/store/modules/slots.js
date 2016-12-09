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
    scopedSlots: s => s.slots.scoped,
    namedSlots: s => s.slots.named,
  },
  mutations: {
    [types.SLOTS_INIT]({ slots }, { named, scoped }) {
      Reflect.ownKeys(named).forEach((key) => {
        slots.named[key] = named[key];
      });

      Reflect.ownKeys(scoped).forEach((key) => {
        slots.scoped[key] = scoped[key];
      });
    },
  },
};
