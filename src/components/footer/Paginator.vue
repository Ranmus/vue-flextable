<template lang="pug">
.ft-paginator
  slot
    span Rows per page:
    ft-selector(
      :value="pageSize",
      :options="limits",
      @input="setPageSize(Number($event))"
      )
    span Page {{ page }} of {{ pages }}
    button(:disabled="isFirstPage", @click="first").ft-paginator-button | &lt;
    button(:disabled="isFirstPage", @click="prev").ft-paginator-button &lt;
    button(:disabled="isLastPage", @click="next").ft-paginator-button &gt;
    button(:disabled="isLastPage", @click="last").ft-paginator-button &gt; |
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftSelector from '../reusable/Selector';

export default {
  components: { ftSelector },
  computed: {
    ...mapGetters([
      'pageSize',
      'limits',
      'total',
      'page',
      'pages',
      'isFirstPage',
      'isLastPage',
    ]),
  },
  methods: {
    first() {
      this.$store.dispatch('paginatorFirstPage');
    },
    next() {
      this.$store.dispatch('paginatorNextPage');
    },
    prev() {
      this.$store.dispatch('paginatorPreviousPage');
    },
    last() {
      this.$store.dispatch('paginatorLastPage');
    },
    setPageSize(pageSize) {
      this.$store.dispatch('paginatorSetPageSize', { pageSize });
    },
  },
};
</script>
