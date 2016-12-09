<template lang="pug">
.ft-header
  ft-title(v-if="namedSlots.title")
  ft-search(v-if="dataLoaded")
    template(slot="search" v-if="scopedSlots.search" scope="p")
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
      'dataLoaded',
      'namedSlots',
      'scopedSlots',
    ]),
  },
};
</script>
