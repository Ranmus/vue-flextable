<template lang="pug">
  span.flextable-paginator Page {{ page }} of {{ pages }}
    button(v-show="page > 1" @click="nextPage") &lt;
    button(v-show="page < pages" @click="prevPage") &gt;
</template>

<style>
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
      required: true,
    },
  },
  computed: {
    pages() {
      return Math.floor(this.total / this.size);
    },
  },
  methods: {
    nextPage() {
      this.setPage(this.page + 1);
    },
    prevPage() {
      this.setPage(this.page - 1);
    },
    setPage(page) {
      // todo: fix this
      this.page = page;
    },
  },
};
</script>
