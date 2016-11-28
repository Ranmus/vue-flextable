<template lang="pug">
.ft-header
  ft-title(v-if="slotTitle")
  ft-search(v-if="dataLoaded")
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftSearch from './Search';
import ftTitle from './Title';

export default {
  components: {
    ftSearch,
    ftTitle,
  },
  computed: {
    ...mapGetters([
      'dataLoaded',
      'slotTitle',
    ]),
  },
};
</script>
