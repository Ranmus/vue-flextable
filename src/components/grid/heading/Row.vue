<template lang="pug">
.ft-heading-row(:class="wrapClass")
  template(v-for="column in columns")
    ft-heading-cell(
      v-if="column.show !== false",
      :value="column.name",
      :align="column.align",
      :sortable="column.sortable !== false"
      )
</template>

<style lang="sass">
.ft-heading-row
  display: flex
  width: auto
  border-bottom: 1px solid #c7c7c7
.ft-heading-row:last-child
  border-bottom: 0px
  flex:
    direction: row
.ft-heading-row-wrap
  flex:
    wrap: wrap
.ft-heading-row-nowrap
  flex:
    wrap: no-wrap
</style>

<script lang="babel">
import ftHeadingCell from './Cell';

export default {
  components: {
    ftHeadingCell,
  },
  props: {
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
    alignClass() {
      return `ft-cell-${(this.align || 'left')}`;
    },
    wrapClass() {
      return `ft-row-${this.wrap ? 'wrap' : 'nowrap'}`;
    },
  },
};
</script>
