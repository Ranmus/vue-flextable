<template lang="pug">
.ft-footer-pagesize
  slot(name="pagesize", :setLimit="setLimit")
    span Rows per page:
    ft-selector(
      :value="limit",
      :options="limits",
      @input="setLimit(Number($event))"
      )
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftSelector from '../reusable/Selector';

export default {
  computed: {
    ...mapGetters([
      'limit',
      'limits',
    ]),
  },
  methods: {
    setLimit(limit) {
      this.$store.dispatch('setLimit', {
        limit,
      });
    },
  },
  components: { ftSelector },
};
</script>
