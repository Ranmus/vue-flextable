<template lang="pug">
.ft-footer-paginator
  slot(name="paginator", :data="{page, pages, first, prev, next, last, total, limit}")
    span Page {{ page }} of {{ pages }}
    button(
      :disabled="isFirstPage",
      @click="first"
      ).ft-footer-paginator-button | &lt;
    button(
      :disabled="isFirstPage",
      @click="prev"
      ).ft-footer-paginator-button &lt;
    button(
      :disabled="isLastPage",
      @click="next"
      ).ft-footer-paginator-button &gt;
    button(
      :disabled="isLastPage",
      @click="last"
      ).ft-footer-paginator-button &gt; |
</template>

<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'limit',
      'total',
      'page',
      'pages',
      'isFirstPage',
      'isLastPage',
    ]),
  },
  methods: {
    first() {
      this.setPage(1);
    },
    next() {
      this.setPage(Math.min(this.pages, this.page + 1));
    },
    prev() {
      this.setPage(Math.max(1, this.page - 1));
    },
    last() {
      this.setPage(this.pages);
    },
    setPage(page) {
      this.$store.dispatch('setPage', { page });
    },
  },
};
</script>
