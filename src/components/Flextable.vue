<template lang="pug">
.flextable
  .loader(v-if="loading")
    spinner
  .flextable-table(v-else="loading")
    grid(v-if="rows.length > 0", :rows="rows")
  .flextable-footer
    template(v-if="pagination") Rows per page:
      selector(v-model.number="limit", :options="limits")
      paginator(v-model.number="page", :total="data.length", :size="limit")
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
import Grid from './gui/grid/Grid';
import Selector from './gui/Selector';
import Paginator from './gui/Paginator';
import Spinner from './gui/Spinner';

export default {
  components: {
    Grid,
    Selector,
    Paginator,
    Spinner,
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
      limits: [10, 20, 30, 50, 100],
      page: 1,
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
  },
  created() {
    const { pagination } = this.config;

    if (pagination) {
      if (pagination.enabled) {
        this.pagination = pagination.enabled;
      }
      if (pagination.limit) {
        this.limit = pagination.limit;
      }
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
