<template lang="pug">
.flextable-row.flextable-heading
  .flextable-cell(v-for="name in names") {{ name }}
</template>

<style lang="sass">
.flextable-heading
  font:
    weight: bold
</style>

<script lang="babel">
export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  computed: {
    names() {
      const names = Reflect.ownKeys(this.row);
      names.pop();
      return names;
    },
  },
};
</script>
