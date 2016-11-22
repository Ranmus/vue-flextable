<template lang="pug">
.ft-pagesize
  ft-selector(
    :value="limit",
    :options="limits",
    @input="$emit('setLimit', $event)"
    )
</template>

<style lang="sass">
.ft-pagesize
  display: inline-block
</style>

<script lang="babel">
import ftSelector from '../ui/Selector';

export default {
  components: {
    ftSelector,
  },
  props: {
    limit: {
      type: Number,
      required: true,
    },
    limits: {
      type: Array,
      required: true,
    },
  },
};
</script>
