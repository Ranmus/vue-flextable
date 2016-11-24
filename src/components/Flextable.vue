<template lang="pug">
.flextable
  ft-header
    template(v-if="this.$slots.title" slot="title")
      slot(name="title")

  ft-loader(v-if="store.loading")

  .flextable-table(v-else="store.loading")
    ft-grid(
      v-if="rows.length > 0",
      :rows="rows",
      :columns="store.columns",
      :device="device",
      :config="config"
      )
  ft-footer(:store="store")
</template>

<style lang="sass">
@mixin shadow
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)
@mixin border
  border: 1px solid rgba(0,0,0,.12)
.flextable
  @include border
  @include shadow
  background: #fff
</style>

<script lang="babel">
import axios from 'axios';
import ftHeader from './header/Header';
import ftFooter from './footer/Footer';
import ftLoader from './loader/Loader';
import ftGrid from './grid/Grid';

const isMobile = require('ismobilejs');
const MQFacade = require('media-query-facade');

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
    };
  },
  watch: {
    limit() {
      this.page = 1;
    },
  },
  computed: {
    rows() {
      const { pagination, page, limit } = this.store;
      const offset = (page - 1) * limit;

      if (pagination) {
        return this.store.data.slice(offset, offset + limit);
      }

      return this.data;
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
    const { pagination, columns, data } = this.config;
    const mqf = new MQFacade({
      small: 'only screen and (max-width: 600px)',
      medium: 'only screen and (min-width: 601px) and (max-width: 992px)',
      large: 'only screen and (min-width: 993px)',
    });
    const store = {
      $root: this,
      url: null,
      debug: true,
      pagination: true,
      limit: 10,
      limits: [1, 5, 10, 20, 30, 50, 100],
      columns: {},
      data: [],
      page: 1,
      loading: true,
      isMobile: false,
      screenSize: 'large',
      deviceType: 'desktop',
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

    mqf.on('small', () => {
      store.setScreenSize('small');
    });

    mqf.on('medium', () => {
      store.setScreenSize('medium');
    });

    mqf.on('large', () => {
      store.setScreenSize('large');
    });

    if (isMobile.any) {
      store.isMobile = true;
    }

    if (isMobile.phone) {
      store.deviceType = 'phone';
    }

    if (isMobile.tablet) {
      store.deviceType = 'tablet';
    }

    this.store = store;
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
  },
};
</script>
