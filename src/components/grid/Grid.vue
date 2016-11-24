<template lang="pug">
.ft-grid
  ft-heading(:columns="columns", :wrap="wrap")
  ft-row(v-for="row in rows", :row="row", :columns="columns", :wrap="wrap")
</template>

<style lang="sass">
.ft-grid
  display: flex
  flex-direction: column
</style>

<script lang="babel">
import MQFacade from 'media-query-facade';
import ftHeading from './heading/Heading';
import ftRow from './Row';

export default {
  components: {
    ftHeading,
    ftRow,
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
  data() {
    return {
      mq: new MQFacade(),
    };
  },
  computed: {
    wrap() {
      return this.config.wrap[this.device] === true;
    },
  },
};
</script>
