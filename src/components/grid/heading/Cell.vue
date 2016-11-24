<template lang="pug">
.ft-heading-cell(
  @click="toggleSorting",
  :class=`{
    'ft-heading-cell-sortable': sortable,
    'ft-heading-cell-left': align === 'left',
    'ft-heading-cell-right': align === 'right',
    'ft-heading-cell-center': align === 'center'}`
  )
  template {{ value }}
</template>

<style lang="sass">
.ft-heading-cell
  width: 100%
  padding: 16px
  align-items: center
  font-weight: bold
.ft-heading-cell-left
  text-align: left
.ft-heading-cell-center
  text-align: center
.ft-heading-cell-right
  text-align: right
.ft-heading-cell-sortable
  cursor: pointer
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
    sortable: {
      required: false,
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggleSorting() {
      console.log(this.sortable);
    },
  },
};
</script>
