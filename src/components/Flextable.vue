<template lang="pug">
.flextable(:class=`[store.mobileClass, store.deviceClass, store.sizeClass]`)
  ft-header(:store="store")
    template(v-if="this.$slots.title" slot="title")
      slot(name="title")

  ft-loader(v-if="store.loading")
  ft-grid(v-else="store.loading", :store="store")
  ft-footer(:store="store")
</template>

<style lang="sass">
@import ~assets/flextable.sass
</style>

<script lang="babel">
import axios from 'axios';
import ftHeader from './header/Header';
import ftFooter from './footer/Footer';
import ftLoader from './loader/Loader';
import ftGrid from './grid/Grid';

const isMobile = require('ismobilejs');
const MQFacade = require('media-query-facade');
const find = require('just-find');

export default {
  components: {
    ftHeader,
    ftFooter,
    ftLoader,
    ftGrid,
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      store: {},
      mqf: null,
    };
  },
  watch: {
    limit() {
      this.page = 1;
    },
  },
  computed: {
    rows() {
      let data = this.store.data;

      if (this.store.searchEnabled && this.store.searchText.length > 0) {
        data = data.filter((row) => {
          const result = find(row, (key, value) =>
            String(value).indexOf(this.store.searchText) !== -1,
          );

          return Reflect.ownKeys(result).length > 0;
        });
      }

      const { pagination, page, limit } = this.store;
      const offset = (page - 1) * limit;

      if (pagination) {
        return data.slice(offset, offset + limit);
      }

      return data;
    },
    device() {
      if (isMobile.phone) {
        return 'phone';
      }
      if (isMobile.tablet) {
        return 'tablet';
      }

      return 'desktop';
    },
  },
  created() {
    const { pagination, columns, data, wrap } = this.config;
    const store = {
      url: null,
      debug: true,
      pagination: true,
      limit: 10,
      limits: [1, 5, 10, 20, 30, 50, 100],
      columns: {},
      wrap: {},
      data: [],
      page: 1,
      loading: true,
      isMobile: false,
      isPhone: false,
      isTablet: false,
      isDesktop: true,
      screenSize: null,
      sizeClass: null,
      deviceClass: null,
      mobileClass: null,
      searchEnabled: false,
      searchText: '',
      getRows: () => this.rows,
      setData(value) {
        this.log('setData', value);
        this.data = value;
      },
      setLimit(limit) {
        this.log('setLimit', limit);
        this.limit = limit;
        this.setPage(1);
      },
      setPage(page) {
        this.log('setPage', page);
        this.page = page;
      },
      setLoading(loading) {
        this.log('setLoading', loading);
        this.loading = loading;
      },
      setScreenSize(size) {
        this.log('setScreenSize', size);
        this.screenSize = size;
      },
      setSearchText(text) {
        this.log('setSearchText', text);
        this.searchText = text;
      },
      log(message, value) {
        if (this.debug) {
          console.log(message, value);
        }
      },
    };

    if (pagination) {
      if (Reflect.has(pagination, 'enabled')) {
        store.pagination = pagination.enabled;
      }
      if (Reflect.has(pagination, 'limit')) {
        store.limit = pagination.limit;
      }
    }

    if (data) {
      if (Reflect.has(data, 'url')) {
        store.url = data.url;
      }
    }

    if (columns) {
      store.columns = columns;
    }

    if (wrap) {
      store.wrap = wrap;
    }

    this.store = store;
    this.mqf = new MQFacade();

    this.addScreenSize('small', 'only screen and (max-width: 600px)');
    this.addScreenSize('medium', 'only screen and (min-width: 601px) and (max-width: 992px)');
    this.addScreenSize('large', 'only screen and (min-width: 993px)');

    if (isMobile.any) {
      store.isDesktop = false;
      store.isMobile = true;
      store.mobileClass = 'ft-mobile';
    }

    if (isMobile.phone) {
      store.isPhone = true;
      store.isTablet = false;
      store.deviceClass = 'ft-phone';
    }

    if (isMobile.tablet) {
      store.isPhone = false;
      store.isTablet = true;
      store.deviceClass = 'ft-tablet';
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(this.store.url).then((response) => {
        this.store.setData(response.data);
        this.store.setLoading(false);
      });
    },
    setData(data) {
      this.data = data.data;
    },
    addScreenSize(name, mediaQuery) {
      this.mqf.on(mediaQuery, () => {
        this.store.setScreenSize(name);
        this.store.sizeClass = `ft-size-${name}`;
      });
    },
    removeScreenSizes() {
      this.mqf.off();
    },
  },
};
</script>
