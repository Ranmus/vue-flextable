<template lang="pug">
  .flextable
    .loader
      flexspinner
</template>

<style lang="sass">
  .flextable
    border: 1px solid green
    padding: 10px

  .loader
    border: 1px solid greenyellow
    display: flex
    justify-content: center
    align-items: center

</style>

<script>
  import Flexspinner from './Flexspinner';

  export default {
    data() {
      return {
        message: 'Flextable container',
        rows: [],
      };
    },
    components: {
      Flexspinner,
    },

    mounted() {
      const resource = this.$resource('./static/data.json');

      resource.get().then((response) => {
        this.rows = response.data;
      });
    },
  };
</script>
