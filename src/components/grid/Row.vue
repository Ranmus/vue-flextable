<template lang="pug">
.ft-row(:class="wrapClass")
  template(v-for="value, key in columns")
    ft-cell(v-if="columns[key].show !== false", :value="render(key)", :align="columns[key].align")
</template>

<style lang="sass">
.ft-row
  display: flex
  width: auto
  border-bottom: 1px solid #c7c7c7
.ft-row:last-child
  border-bottom: 0px
  flex:
    direction: row
.ft-row-wrap
  flex:
    wrap: wrap
.ft-row-nowrap
  flex:
    wrap: no-wrap
</style>

<script lang="babel">
import ftCell from './Cell';

export default {
  components: {
    ftCell,
  },
  store: {
    mq: 'mq',
  },
  props: {
    row: {
      type: Object,
      required: true,
    },
    columns: {
      type: Object,
      required: true,
    },
    wrap: {
      required: false,
      default: true,
    },
  },
  computed: {
    wrapClass() {
      return `ft-row-${this.wrap ? 'wrap' : 'nowrap'}`;
    },
  },
  methods: {
    render(key) {
      if (this.columns[key].render) {
        return this.columns[key].render(this.row[key], this.row);
      }
      return this.row[key];
    },
  },
};
</script>
