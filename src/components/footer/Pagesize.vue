<template lang="pug">
.ft-footer-pagesize Rows per page:
  ft-selector(
    :value="store.limit",
    :options="store.limits",
    @input="store.setLimit(Number($event))"
    )
</template>

<script lang="babel">
import ftSelector from '../reusable/Selector';

export default {
  components: {
    ftSelector,
  },
  props: {
    store: {
      required: true,
      type: Object,
    },
  },
};
</script>
