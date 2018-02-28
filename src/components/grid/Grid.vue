<template lang="pug">
.ft-grid
  slot
    ft-heading
    ft-row(v-for="row in rowsToRender", :row="row", :key="row.name")
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftHeading from './heading/Heading';
import ftRow from './Row';

export default {
  components: {
    ftHeading,
    ftRow,
  },
  computed: {
    ...mapGetters([
      'rowsToRender',
    ]),
  },
};
</script>
