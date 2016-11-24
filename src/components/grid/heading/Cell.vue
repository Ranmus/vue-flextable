<template lang="pug">
.ft-heading-cell(
  @click="toggleSorting",
  :class=`{
    'ft-heading-cell-sortable': sortable,
    'ft-align-left': align === 'left',
    'ft-align-right': align === 'right',
    'ft-align-center': align === 'center'}`
    )
  template {{ value }}
</template>

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
