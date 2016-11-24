<template lang="pug">
.ft-grid(v-if="store.data.length > 0")
  ft-heading(:store="store")
  ft-row(v-for="row in store.getRows()", :row="row", :store="store")
</template>

<script lang="babel">
import storeMixin from 'mixins/Store';
import ftHeading from './heading/Heading';
import ftRow from './Row';

export default {
  mixins: [storeMixin],
  components: {
    ftHeading,
    ftRow,
  },
};
</script>
