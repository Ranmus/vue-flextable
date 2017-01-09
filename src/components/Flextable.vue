<template lang="pug">
.flextable(:class="[classes.mobile, classes.device, classes.size]")
  slot(
    :selected="selected",
    :screenSize="screen.size",
    :device="device",
    :page="page",
    :pages="pages",
    :filteredTotal="filteredTotal",
    :filterText="filterText",
    :filter="filter",
    :pageSize="pageSize",
    :setPageSize="setPageSize",
    :firstPage="firstPage",
    :previousPage="previousPage",
    :nextPage="nextPage",
    :lastPage="lastPage",
    :rowsToRender="rowsToRender",
    :columns="columns",
    :sort="sort",
    :toggleSelect="toggleSelect"
    )
    ft-header
    ft-grid(v-if="loaded")
    ft-state(v-else="loaded")
    ft-footer
</template>

<style lang="sass">
@import ~assets/flextable.sass
</style>

<script lang="babel">
import { mapActions, mapGetters } from 'vuex';
import Store from 'src/store';
import ftFooter from 'components/footer/Footer';
import ftState from 'components/state/State';
import ftGrid from 'components/grid/Grid';

export default {
  components: {
    ftFooter,
    ftGrid,
    ftState,
  },
  props: {
    data: {
      type: Array,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    side: {
      type: String,
      required: false,
      default: 'client',
    },
    // screenSizes: {
    //   type: Object,
    //   required: false,
    //   default: null,
    // },
    columns: {
      type: Array,
      required: false,
      default: () => [],
    },
    config: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters([
      'filteredTotal',
      'filterText',
      'pageSize',
      'page',
      'pages',
      'loaded',
      'slots',
      'classes',
      'selected',
      'rowsToRender',
      'sort',
      'screen',
      'device',
      'selected',
    ]),
  },
  created() {
    this.$store = Store();

    this.$store.watch((state, getters) => getters.rowsToRender, (rowsToRender) => {
      this.$emit('rowsToRender', { rowsToRender });
    });

    this.$store.watch((state, getters) => getters.selected, (rowsSelected) => {
      this.$emit('rowsSelected', { rowsSelected });
    });
  },
  mounted() {
    const { columns, config, data, side, url } = this;

    // const config = {
    //   url: this.url,
    //   source: this.source,
    //   side: this.side,
    //   limit: this.limit,
    //   limits: this.limits,
    //   pagination: this.pagination,
    //   sortable: this.sortable,
    //   searchable: this.searchable,
    //   screenSizes: this.screenSizes,
    // };

    const slots = {
      named: this.$slots,
      scoped: this.$scopedSlots,
    };

    this.$store.dispatch('initialize', {
      columns,
      config,
      slots,
      url,
      side,
      data,
    });
  },
  methods: {
    firstPage() {
      this.$store.dispatch('paginatorFirstPage');
    },
    previousPage() {
      this.$store.dispatch('paginatorPreviousPage');
    },
    nextPage() {
      this.$store.dispatch('paginatorNextPage');
    },
    lastPage() {
      this.$store.dispatch('paginatorLastPage');
    },
    setPageSize(pageSize) {
      this.$store.dispatch('paginatorSetPageSize', { pageSize });
    },
    setPageSizes(pageSizes) {
      this.$store.dispatch('paginatorSetPageSizes', { pageSizes });
    },
    filter(text) {
      this.$store.dispatch('filterSetText', { text });
    },
    sortBy(name) {
      this.$store.dispatch('sortSetField', { name });
    },
    delete(row) {
      return this.$store.dispatch('delete', { row });
    },
    sync(row) {
      return this.$store.dispatch('sync', { row });
    },
    select(row) {
      this.$store.dispatch('select', { row });
    },
    toggleSelect(row) {
      this.$store.dispatch('toggleSelect', { row });
    },
    getSelected() {
      return this.selected;
    },
    ...mapActions([
      'addScreenSize',
      'clearScreenSizes',
    ]),
  },
};
</script>
