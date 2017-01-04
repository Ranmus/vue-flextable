<template lang="pug">
.flextable(:class="[classes.mobile, classes.device, classes.size]")
  slot(
    :page="page",
    :pages="pages",
    :found="filteredTotal",
    :pageSize="pageSize",
    :setPageSize="setPageSize",
    :firstPage="firstPage",
    :previousPage="previousPage",
    :nextPage="nextPage",
    :lastPage="lastPage",
    )
    ft-header
    ft-footer

  template(v-if="loaded")
    ft-grid
  ft-state(v-else="loaded")
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
    // sortable: {
    //   type: Array,
    //   required: false,
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
      'pageSize',
      'page',
      'pages',
      'loaded',
      'slots',
      'classes',
      'selected',
    ]),
  },
  created() {
    this.$store = Store();
  },
  mounted() {
    const { columns, config, data, side, url } = this;

    // console.log(this.config);

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
    filter(text) {
      this.$store.dispatch('filterSetText', { text });
    },
    sortBy(name) {
      this.$store.dispatch('sortBy', { name });
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
