<template lang="pug">
.flextable
  ft-header
    template(v-if="this.$slots.title" slot="title")
      slot(name="title")

  .loader(v-if="loading")
    ft-loader

  .flextable-table(v-else="loading")
    ft-grid(
      v-if="rows.length > 0",
      :rows="rows",
      :columns="columns",
      :device="device",
      :config="config"
      )
  ft-footer
    ftPageSize(
      slot="pageSize",
      :limit="limit",
      :limits="limits",
      @setLimit="limit = Number($event)"
      )
    ft-paginator(
      slot="paginator",
      :page="page",
      :total="data.length",
      :size="limit",
      @setPage="page = $event"
      )
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
.loader
  display: flex
  justify-content: center
  align-items: center
  padding: 50px
</style>

<script lang="babel">
import Vue from 'vue';
import ftHeader from './header/Header';
import ftFooter from './footer/Footer';
import ftLoader from './loader/Loader';
import ftPageSize from './footer/PageSize';
import ftPaginator from './footer/Paginator';
import ftGrid from './grid/Grid';

const isMobile = require('ismobilejs');

if (Vue.prototype.$bus === undefined) {
  console.log('brak busa');
}
const isMobile = require('ismobilejs');

export default {
  components: {
    ftHeader,
    ftFooter,
    ftLoader,
    ftPageSize,
    ftPaginator,
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
      message: 'Flextable container',
      resource: null,
      data: [],
      loading: true,
      pagination: false,
      limit: 10,
      limits: [5, 10, 20, 30, 50, 100],
      page: 1,
      columns: null,
    };
  },
  watch: {
    limit() {
      this.page = 1;
    },
  },
  computed: {
    rows() {
      const { data, pagination, page, limit } = this;
      const offset = (page - 1) * limit;

      if (pagination) {
        return data.slice(offset, offset + limit);
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
    const { pagination, columns } = this.config;

    if (pagination) {
      if (pagination.enabled) {
        this.pagination = pagination.enabled;
      }
      if (pagination.limit) {
        this.limit = pagination.limit;
      }
    }

    if (columns) {
      this.columns = columns;
    }
  },
  mounted() {
    this.data.resource = this.$resource(this.config.data.url);
    this.getData();
  },
  methods: {
    getData() {
      this.data.resource.get().then((response) => {
        this.data = response.data;
        this.loading = false;
      });
    },
    setData(data) {
      this.data = data.data;
    },
  },
};
</script>
