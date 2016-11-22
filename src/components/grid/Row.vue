<template lang="pug">
.flextable-row(:class="wrapClass")
  template(v-for="value, key in columns")
    cell(v-if="columns[key].show !== false", :value="render(key)", :align="columns[key].align")
</template>

<style lang="sass">
.flextable-row
  display: flex
  width: auto
  border-bottom: 1px solid #c7c7c7
.flextable-row:last-child
  border-bottom: 0px
  flex:
    direction: row
.flextable-row-wrap
  flex:
    wrap: wrap
.flextable-row-nowrap
  flex:
    wrap: no-wrap
</style>

<script lang="babel">
import Cell from './Cell';

export default {
  components: {
    Cell,
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
      return `flextable-row-${this.wrap ? 'wrap' : 'nowrap'}`;
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
