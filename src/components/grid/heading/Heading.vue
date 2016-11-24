<template lang="pug">
.ft-heading
  ft-heading-row(:columns="columns", :wrap="wrap")
</template>

<script lang="babel">
import ftHeadingRow from './Row';

export default {
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
  components: {
    ftHeadingRow,
  },
};
</script>
