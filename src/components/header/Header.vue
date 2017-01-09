<template lang="pug">
.ft-header
  slot
    ft-title
    ft-filter(v-if="loaded")
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftFilter from './Filter';
import ftTitle from './Title';

export default {
  components: {
    ftFilter,
    ftTitle,
  },
  computed: {
    ...mapGetters([
      'loaded',
    ]),
  },
};
</script>
