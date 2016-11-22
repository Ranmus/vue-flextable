<template lang="pug">
  span.flextable-paginator Page {{ value }} of {{ pages }}
    button(:disabled="isFirst", @click="first").flextable-paginator-button
      slot(name="first") | &lt;
    button(:disabled="isFirst", @click="prev").flextable-paginator-button
      slot(name="prev") &lt;
    button(:disabled="isLast", @click="next").flextable-paginator-button
      slot(name="next") &gt;
    button(:disabled="isLast", @click="last").flextable-paginator-button
      slot(name="last") &gt; |
</template>

<style lang="sass">
.flextable-paginator-button
  display: inline-block
  cursor: pointer
</style>

<script lang="babel">
export default {
  props: {
    value: {
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
      return this.value <= 1;
    },
    isLast() {
      return this.value >= this.pages;
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
      this.setPage(Math.min(this.pages, this.value + 1));
    },
    prev() {
      this.setPage(Math.max(1, this.value - 1));
    },
    last() {
      this.setPage(this.pages);
    },
    setPage(page) {
      this.$emit('input', Math.min(Math.max(1, page), this.pages));
    },
  },
};
</script>
