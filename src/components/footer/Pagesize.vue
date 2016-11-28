<template lang="pug">
.ft-footer-pagesize Rows per page:
  ft-selector(
    :value="limit",
    :options="limits",
    @input="setLimit(Number($event))"
    )
</template>

<script lang="babel">
import { mapGetters, mapActions } from 'vuex';
import ftSelector from '../reusable/Selector';

export default {
  computed: {
    ...mapGetters([
      'limit',
      'limits',
    ]),
  },
  methods: {
    ...mapActions([
      'setLimit',
    ]),
  },
  components: { ftSelector },
};
</script>
