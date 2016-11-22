<template lang="pug">
.flextable-grid
  heading(:columns="columns", :wrap="wrap")
  row(v-for="row in rows", :row="row", :columns="columns", :wrap="wrap")
</template>

<style lang="sass">
.flextable-grid
  display: flex
  flex-direction: column
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
    device: {
      type: String,
      required: false,
      default: 'desktop',
    },
    config: {
      type: Object,
      required: true,
    },
  },
  computed: {
    wrap() {
      return this.config.wrap[this.device] === true;
    },
  },
};
</script>
