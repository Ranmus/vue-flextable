<template lang="pug">
.ft-paginator Page {{ page }} of {{ pages }}
  button(:disabled="isFirst", @click="first").ft-paginator-button | &lt;
  button(:disabled="isFirst", @click="prev").ft-paginator-button &lt;
  button(:disabled="isLast", @click="next").ft-paginator-button &gt;
  button(:disabled="isLast", @click="last").ft-paginator-button &gt; |
</template>

<style lang="sass">
.ft-paginator
  display: inline-block
.ft-paginator-button
  display: inline-block
  cursor: pointer
</style>

<script lang="babel">
export default {
  props: {
    page: {
      type: Number,
      required: false,
      default: 1,
    },
    total: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  computed: {
    isFirst() {
      return this.page <= 1;
    },
    isLast() {
      return this.page >= this.pages;
    },
    pages() {
      return Math.floor(this.total / this.size);
    },
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
      this.$emit('setPage', page);
    },
  },
};
</script>
