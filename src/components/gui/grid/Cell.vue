<template lang="pug">
.flextable-cell
  .flextable-cell-container(v-html="value", :class="alignClass")
</template>

<style lang="sass">
.flextable-cell
  width: 100%
  overflow: hidden
  padding: 16px
  display: flex
  align-items: center
.flextable-cell-container
  width: 100%
.flextable-cell-left
  text-align: left
.flextable-cell-center
  text-align: center
.flextable-cell-right
  text-align: right
</style>

<script lang="babel">
export default {
  props: {
    align: {
      required: false,
    },
    value: {
      required: false,
      default: null,
    },
  },
  computed: {
    alignClass() {
      return `flextable-cell-${(this.align || 'left')}`;
    },
  },
};
</script>
