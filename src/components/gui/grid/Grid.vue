<template lang="pug">
.flextable-grid
  heading(:columns="columns")
  row(v-for="row in rows", :row="row", :columns="columns")
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
    columns: {
      type: Object,
      required: true,
    },
  },
};
</script>
