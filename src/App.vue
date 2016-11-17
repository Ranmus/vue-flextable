<template lang="pug">
  #app
    h1 {{ title }}
    flextable(
      data-url="./static/data.json"
    )
</template>

<style lang="sass">
  body
    font-family: Helvetica, Arial, sans-serif
</style>

<script>
  import Flextable from './components/Flextable';

  export default {
    name: 'app',
    data() {
      return {
        title: 'Flextable application example',
      };
    },
    components: {
      Flextable,
    },
  };
</script>
