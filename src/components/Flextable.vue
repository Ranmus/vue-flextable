<template lang="pug">
.flextable(:class="[classes.mobile, classes.device, classes.size]")
  ft-header
    template(slot="search" v-if="slots.named.search" scope="p")
      slot(name="search", :filterBy="p.filterBy")
  template(v-if="loaded")
    ft-grid
    ft-footer
      template(v-if="slots.scoped.pagesize" slot="pagesize" scope="p")
        slot(name="pagesize", :setLimit="p.setLimit")
      template(v-if="slots.scoped.paginator" slot="paginator" scope="p")
        slot(
          name="paginator",
          :page="p.data.page",
          :pages="p.data.pages",
          :first="p.data.first",
          :prev="p.data.prev",
          :next="p.data.next",
          :last="p.data.last",
          :total="p.data.total",
          :limit="p.data.limit",
        )
  ft-state(v-else="loaded")
</template>

<style lang="sass">
@import ~assets/flextable.sass
</style>

<script lang="babel">
import { mapActions, mapGetters } from 'vuex';
import Store from 'src/store';
import ftHeader from 'components/header/Header';
import ftFooter from 'components/footer/Footer';
import ftState from 'components/state/State';
import ftGrid from 'components/grid/Grid';

export default {
  components: {
    ftHeader,
    ftFooter,
    ftGrid,
    ftState,
  },
  props: {
    source: {
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
    screenSizes: {
      type: Object,
      required: false,
      default: null,
    },
    limit: {
      type: Number,
      required: false,
      default: 10,
    },
    limits: {
      type: Array,
      required: false,
      default: () => [10, 20, 30, 50, 100],
    },
    pagination: {
      type: Boolean,
      required: false,
      default: true,
    },
    sortable: {
      type: Array,
      required: false,
    },
    searchable: {
      type: Array,
      required: false,
    },
  },
  computed: {
    ...mapGetters([
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
    const config = {
      url: this.url,
      source: this.source,
      side: this.side,
      limit: this.limit,
      limits: this.limits,
      pagination: this.pagination,
      sortable: this.sortable,
      searchable: this.searchable,
      screenSizes: this.screenSizes,
    };

    const slots = {
      named: this.$slots,
      scoped: this.$scopedSlots,
    };

    this.$store.dispatch('initialize', {
      config,
      slots,
    });
  },
  methods: {
    filterBy(text) {
      this.$store.dispatch('filterBy', { text });
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
