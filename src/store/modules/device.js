import MediaQuery from 'utils/MediaQuery';
import types from './../types';

const isMobile = require('ismobilejs');

/* eslint-disable no-param-reassign */
export default () => ({
  state: {
    mq: new MediaQuery(),
    device: {
      name: 'desktop',
      isDesktop: true,
      isMobile: false,
      isPhone: false,
      isTablet: false,
    },
    screen: {
      size: null,
      sizes: {
        small: 'only screen and (max-width: 600px)',
        medium: 'only screen and (min-width: 601px) and (max-width: 992px)',
        large: 'only screen and (min-width: 993px)',
      },
    },
    classes: {
      mobile: null,
      device: 'ft-desktop',
      size: null,
    },
  },
  getters: {
    mq: s => s.mq,
    device: s => s.device,
    screen: s => s.screen,
    classes: s => s.classes,
  },
  mutations: {
    [types.DEVICE_DETECT]({ classes, device }) {
      if (isMobile.any) {
        device.isDesktop = false;
        device.isMobile = true;
        device.name = 'mobile';
        classes.mobile = 'ft-mobile';
      }

      if (isMobile.phone) {
        device.isPhone = true;
        device.isTablet = false;
        device.name = 'phone';
        classes.device = 'ft-phone';
      }

      if (isMobile.tablet) {
        device.isPhone = false;
        device.isTablet = true;
        device.name = 'tablet';
        classes.device = 'ft-tablet';
      }
    },
    [types.SCREEN_SIZE_CHANGE]({ classes, screen }, { name }) {
      classes.size = `ft-size-${name}`;
      screen.size = name;
    },
    [types.SCREEN_SIZE_ADD]({ mq, screen }, { name, mediaQuery, commit }) {
      screen.sizes[name] = mediaQuery;

      mq.on(mediaQuery, () => {
        commit(types.SCREEN_SIZE_CHANGE, { name });
      });
    },
    [types.SCREEN_SIZES_CLEAR]({ mq, screen }) {
      mq.off();
      screen.size = null;
    },
  },
  actions: {
    initScreenSizes({ commit, getters }) {
      const { mq, screen } = getters;

      Reflect.ownKeys(screen.sizes).forEach((name) => {
        commit(types.SCREEN_SIZE_ADD, { name, mediaQuery: screen.sizes[name], commit });
      });

      mq.check();
    },
    addScreenSize({ commit, getters }, { name, mediaQuery }) {
      commit(types.SCREEN_SIZE_ADD, { name, mediaQuery, commit });
    },
    clearScreenSizes({ commit }) {
      commit(types.SCREEN_SIZES_CLEAR);
    },
  },
});
