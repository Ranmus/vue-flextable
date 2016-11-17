<template lang="pug">
  #app
    h1 {{ title }}
    a(:href="url").source Mocked REST server
    flextable(:url="url")
</template>

<style lang="sass">
  $source-color: white
  $source-bgColor: blue
  body
    font-family: Helvetica, Arial, sans-serif

  a.source
    margin-bottom: 10px
    padding: 10px
    display: inline-block
    text-decoration: none
    color: $source-color
    background-color: $source-bgColor
</style>

<script>
  import Flextable from './components/Flextable';

  export default {
    name: 'app',
    data() {
      return {
        title: 'Flextable application example',
        url: 'http://localhost:8090/users',
      };
    },
    components: {
      Flextable,
    },
  };
</script>
