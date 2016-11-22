<template lang="pug">
.flextable-row
  template(v-for="value, key in row")
    cell(v-if="columns[key].show !== false", :value="render(key)", :align="columns[key].align")
</template>

<style lang="sass">
.flextable-row
  display: flex
  width: auto
  &:not(:last-child)
    border-bottom: 1px solid #c7c7c7
  flex:
    direction: row
    wrap: no-wrap

.flextable-wrap
  flex:
    wrap: wrap

.flextable-nowrap
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
