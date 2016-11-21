<template lang="pug">
.flextable
  .loader(v-if="loading")
    flexspinner
  .flextable-table(v-else="loading")
    .flextable-row.header
      .flextable-cell(v-for="cell in rows[0]") header
    .flextable-row(v-for="row in rows")
      .flextable-cell(v-for="cell in row") {{ cell }}
  .flextable-footer
    flextable-paginator(v-if="pagination", :total="data.length", :size="limit")
    flextable-select(v-model.number="limit", :options="limits")
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

.flextable-table
  display: flex
  flex-direction: column
  border:
    collapse: collapse
  .flextable-row
    display: flex
    width: auto
    &:not(:last-child)
      border:
        bottom: 1px solid #c7c7c7
    flex:
      direction: row
      wrap: nowrap
    .flextable-cell
      width: 100%
      overflow: hidden
      padding: 20px

.header
  font:
    weight: bold

.loader
  display: flex
  justify-content: center
  align-items: center
  padding: 50px
</style>

<script lang="babel">
import FlextableSelect from './gui/Select';
import FlextablePaginator from './gui/Paginator';
import Flexspinner from './Flexspinner';

export default {
  components: {
    FlextableSelect,
    FlextablePaginator,
    Flexspinner,
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
  computed: {
    rows() {
      const { data, pagination, page, limit } = this;
      const offset = (page - 1) * limit;

      if (pagination) {
        return data.slice(offset, offset + limit);
      }

      return this.data;
    },
    pages() {
      const { data, limit } = this;
      return Math.ceil(data.length / limit);
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
    limitChanged(e) {
      this.limit = Number(e.target.value);
    },
    setPage(page) {
      this.page = Math.min(Math.max(1, page), this.pages);
    },
  },
};
</script>
