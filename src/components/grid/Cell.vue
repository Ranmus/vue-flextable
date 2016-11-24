<template lang="pug">
.ft-cell
  .ft-cell-container(v-html="value", :class="alignClass")
</template>

<style lang="sass">
.ft-cell
  width: 100%
  overflow: hidden
  padding: 16px
  display: flex
  align-items: center
.ft-cell-container
  width: 100%
.ft-cell-left
  text-align: left
.ft-cell-center
  text-align: center
.ft-cell-right
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
      return `ft-cell-${(this.align || 'left')}`;
    },
  },
};
</script>
