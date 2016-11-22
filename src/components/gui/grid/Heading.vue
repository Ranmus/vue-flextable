<template lang="pug">
.flextable-row.flextable-heading
  .flextable-cell(v-for="value, key in columns") {{ value.name }}
</template>

<style lang="sass">
.flextable-heading
  font:
    weight: bold
</style>

<script lang="babel">
export default {
  props: {
    columns: {
      type: Object,
      required: true,
    },
  },
};
</script>
