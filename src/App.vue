<template lang="pug">
  #app
    h1 {{ title }}
    flextable(
      data-url="./static/data.json"
    )
</template>

<style lang="sass">
  html, body
    margin: 0
    padding: 0
    height: 100%

  body
    font-family: Helvetica, Arial, sans-serif
    display: flex
    align-items: center
    justify-content: center
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
