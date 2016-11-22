<template lang="pug">
.flextable-row.flextable-heading
  template(v-for="value, key in columns")
    cell(v-if="value.show !== false", :value="value.name", :align="value.align")
</template>

<style lang="sass">
.flextable-heading
  font:
    weight: bold
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
  },
  computed: {
    alignClass() {
      return `flextable-cell-${(this.align || 'left')}`;
    },
  },
};
</script>
