<template lang="pug">
.flextable-row
  cell(v-for="cell in row", :value="cell")
</template>

<style lang="sass">
.flextable-row
  display: flex
  width: auto
  &:not(:last-child)
    border:
      bottom: 1px solid #c7c7c7
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
  },
};
</script>
