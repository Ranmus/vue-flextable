<template lang="pug">
.flextable-cell
  span {{ value }}
</template>

<style lang="sass">
.flextable-cell
  width: 100%
  overflow: hidden
  padding: 20px
</style>

<script lang="babel">
export default {
  props: {
    value: {
      required: false,
      default: null,
    },
  },
};
</script>
