<template lang="pug">
.flextable-grid
  heading(:row="first")
  row(v-for="row in rows", :row="row")
</template>

<style lang="sass">
  .flextable-grid
    display: flex
    flex-direction: column
    border:
      collapse: collapse
</style>

<script lang="babel">
import Heading from './Heading';
import Row from './Row';

export default {
  components: {
    Heading,
    Row,
  },
  props: {
    rows: {
      type: Array,
      required: false,
    },
  },
  computed: {
    first() {
      return this.rows[0];
    },
  },
};
</script>
