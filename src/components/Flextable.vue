<template lang="pug">
.flextable(:class="[mobileClass, deviceClass, sizeClass]")
  ft-header

  template(v-if="dataLoaded")
    ft-grid
    ft-footer
  ft-state(v-else="dataLoaded")
</template>

<style lang="sass">
@import ~assets/flextable.sass
</style>

<script lang="babel">
import { mapActions, mapGetters } from 'vuex';
import Store from './store/store';
import ftHeader from './header/Header';
import ftFooter from './footer/Footer';
import ftState from './state/State';
import ftGrid from './grid/Grid';

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
      'mobileClass',
      'deviceClass',
      'sizeClass',
      'dataLoaded',
    ]),
  },
  created() {
    this.$store = Store();
  },
  mounted() {
    const { url, source, side, limit, limits, pagination, sortable, searchable } = this;
    this.loadConfig({
      url,
      source,
      side,
      limit,
      limits,
      pagination,
      sortable,
      searchable,
    });

    this.readSlots(this.$slots);
    this.readScopedSlots(this.$scopedSlots);
    this.detectDevice();
    this.loadScreenSizes(this.screenSizes);
    this.loadData();
  },
  methods: {
    ...mapActions([
      'detectDevice',
      'loadConfig',
      'loadData',
      'readSlots',
      'readScopedSlots',
      'loadScreenSizes',
      'addScreenSize',
      'clearScreenSizes',
      'removeRowBy',
    ]),
  },
};
</script>
