<template lang="pug">
.flextable-row.flextable-heading(:class="wrapClass")
  template(v-for="value, key in columns")
    cell(v-if="value.show !== false", :value="value.name", :align="value.align")
</template>

<style lang="sass">
.flextable-heading
  font-weight: bold
</style>

<script lang="babel">
import Cell from './Cell';

export default {
  components: {
    Cell,
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
      return `flextable-cell-${(this.align || 'left')}`;
    },
    wrapClass() {
      return `flextable-row-${this.wrap ? 'wrap' : 'nowrap'}`;
    },
  },
};
</script>
