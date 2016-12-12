<template lang="pug">
.ft-header
  ft-title(v-if="slots.named.title")
  ft-search(v-if="loaded")
    template(slot="search" v-if="slots.scoped.search" scope="p")
      slot(name="search", :filterBy="p.filterBy")

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
      'loaded',
      'slots',
    ]),
  },
};
</script>
