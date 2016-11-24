<template lang="pug">
select(@change="$emit('input', $event.target.value)").ft-select
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
};
</script>
