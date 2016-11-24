<template lang="pug">
.ft-grid-cell(
  v-html="value",
  :class=`{
    'ft-align-left': align === 'left',
    'ft-align-right': align === 'right',
    'ft-align-center': align === 'center'}`
    )
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
  },
};
</script>
