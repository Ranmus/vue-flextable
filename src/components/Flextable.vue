<template lang="pug">
  .flextable
    flexspinner
</template>

<style lang="sass">
  .flextable
    border: 1px solid green
    padding: 10px
</style>

<script>
  import Flexspinner from './Flexspinner';

  export default {
    data() {
      return {
        message: 'Flextable container',
      };
    },
    components: {
      Flexspinner,
    },
  };
</script>
