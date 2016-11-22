<template lang="pug">
.ft-header
  ft-title
    template(v-if="this.$slots.title", slot="title")
      slot(name="title")
</template>

<style lang="sass">
.ft-header
  padding:
    left: 16px
    right: 16px
</style>

<script lang="babel">
import ftTitle from './Title';

export default {
  components: {
    ftTitle,
  },
};
</script>
