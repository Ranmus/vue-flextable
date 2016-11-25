<template lang="pug">
.ft-header
  ft-title
    template(v-if="this.$slots.title", slot="title")
      slot(name="title")
  ft-search(:store="store")
</template>

<script lang="babel">
import storeMixin from 'mixins/Store';
import ftSearch from './Search';
import ftTitle from './Title';

export default {
  mixins: [storeMixin],
  components: {
    ftSearch,
    ftTitle,
  },
};
</script>
