<template>
  <div class="flextable">
    {{ message }}
  </div>
</template>

<style lang="sass">
  .flextable
    border: 1px solid green
    padding: 10px
</style>

<script>
  export default {
    data() {
      return {
        message: 'Flextable container',
      };
    },
    mounted() {
    },
  };
</script>
