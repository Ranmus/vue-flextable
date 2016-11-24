<template lang="pug">
.ft-footer-pagesize Rows per page:
  ft-selector(
    :value="store.limit",
    :options="store.limits",
    @input="store.setLimit(Number($event))"
    )
</template>

<script lang="babel">
import storeMixin from 'mixins/Store';
import ftSelector from '../reusable/Selector';

export default {
  mixins: [storeMixin],
  components: { ftSelector },
};
</script>
