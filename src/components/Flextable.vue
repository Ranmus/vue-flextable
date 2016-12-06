<template lang="pug">
.flextable(:class="[mobileClass, deviceClass, sizeClass]")
  ft-header
    template(slot="search" v-if="slots.search" scope="p")
      slot(name="search", :filterBy="p.filterBy")
  template(v-if="dataLoaded")
    ft-grid
    ft-footer
      template(v-if="scopedSlots.pagesize" slot="pagesize" scope="p")
        slot(name="pagesize", :setLimit="p.setLimit")
      template(v-if="scopedSlots.paginator" slot="paginator" scope="p")
        slot(name="paginator", :page="p.page", :pages="p.pages", :first="p.first", :prev="p.prev", :next="p.next", :last="p.last")

  ft-state(v-else="dataLoaded")
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
    currentPage() {
      return 6;
    },
    totalPages() {
      return 666;
    },
    ...mapGetters([
      'mobileClass',
      'deviceClass',
      'sizeClass',
      'dataLoaded',
      'slots',
      'scopedSlots',
    ]),
  },
  created() {
    this.$store = Store();
  },
  mounted() {
    const { $store, url, source, side, limit, limits, pagination, sortable, searchable } = this;
    $store.dispatch('loadConfig', {
      url,
      source,
      side,
      limit,
      limits,
      pagination,
      sortable,
      searchable,
    });

    $store.dispatch('readSlots', this.$slots);
    $store.dispatch('readScopedSlots', this.$scopedSlots);
    $store.dispatch('detectDevice');
    $store.dispatch('loadScreenSizes', this.screenSizes);
    $store.dispatch('loadData');
  },
  methods: {
    filterBy(text) {
      this.$store.dispatch('filterBy', {
        text,
      });
    },
    sortBy(name) {
      this.$store.dispatch('sortBy', {
        name,
      });
    },
    ...mapActions([
      'addScreenSize',
      'clearScreenSizes',
      'removeRowBy',
    ]),
  },
};
</script>
