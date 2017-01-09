<template lang="pug">
.ft-footer
  slot
    ft-paginator(v-if="loaded")
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftPaginator from './Paginator';

export default {
  components: {
    ftPaginator,
  },
  computed: {
    ...mapGetters([
      'loaded',
    ]),
  },
};
</script>
