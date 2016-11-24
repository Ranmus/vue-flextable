<template lang="pug">
.ft-footer-paginator Page {{ store.page }} of {{ pages }}
  button(
    :disabled="isFirst",
    @click="first"
    ).ft-footer-paginator-button | &lt;
  button(
    :disabled="isFirst",
    @click="prev"
    ).ft-footer-paginator-button &lt;
  button(
    :disabled="isLast",
    @click="next"
    ).ft-footer-paginator-button &gt;
  button(
    :disabled="isLast",
    @click="last"
    ).ft-footer-paginator-button &gt; |
</template>

<script lang="babel">
import storeMixin from 'mixins/Store';

export default {
  mixins: [storeMixin],
  computed: {
    isFirst() {
      return this.store.page <= 1;
    },
    isLast() {
      return this.store.page >= this.pages;
    },
    pages() {
      const { data, limit } = this.store;
      return Math.floor(data.length / limit);
    },
  },
  methods: {
    first() {
      this.setPage(1);
    },
    next() {
      this.setPage(Math.min(this.pages, this.store.page + 1));
    },
    prev() {
      this.setPage(Math.max(1, this.store.page - 1));
    },
    last() {
      this.setPage(this.pages);
    },
    setPage(page) {
      this.store.setPage(page);
    },
  },
};
</script>
