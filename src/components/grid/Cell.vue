<template lang="pug">
.ft-cell(:class="[alignClass, column.classes]")
  slot
    template {{ value }}
</template>

<style lang="sass">
</style>

<script lang="babel">
export default {
  props: {
    column: {
      required: false,
      type: Object,
      default: () => ({}),
    },
    value: {
      required: false,
    },
  },
  computed: {
    alignClass() {
      const { align } = this.column;
      let alignClass = 'ft-align-left';

      if (align === 'center') {
        alignClass = 'ft-align-center';
      } else if (align === 'right') {
        alignClass = 'ft-align-right';
      }

      return alignClass;
    },
  },
};
</script>
