<template lang="pug">
select(@change="updateValue($event.target.value)").ft-select
  template(v-for="option in options")
    option(:value="option",:selected="option == value") {{ option }}
</template>

<script lang="babel">
export default {
  props: {
    value: {
      required: false,
    },
    options: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
