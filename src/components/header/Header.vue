<template lang="pug">
.ft-header
  ft-title
    template(v-if="this.$slots.title", slot="title")
      slot(name="title")
</template>

<script lang="babel">
import ftTitle from './Title';

export default {
  components: { ftTitle },
};
</script>
