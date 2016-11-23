<template lang="pug">
.ft-row.ft-heading(:class="wrapClass")
  template(v-for="value, key in columns")
    ft-cell(v-if="value.show !== false", :value="value.name", :align="value.align")
</template>

<style lang="sass">
.ft-heading
  font-weight: bold
</style>

<script lang="babel">
import ftCell from './Cell';

export default {
  components: {
    ftCell,
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
