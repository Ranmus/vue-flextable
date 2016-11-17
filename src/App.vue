<template lang="pug">
  #app
    h1 {{ title }}
    a(:href="url").source Mocked REST server
    flextable(:url="url")
</template>

<style lang="sass">
  @import '~roboto-npm-webfont/style.css'

  body
    color: #757575
    background: #fafafa
    padding: 20px 10% 20px 10%
    font:
      family: Roboto, Helvetica, Arial sans-serif
      size: 13px

  a.source
    margin-bottom: 10px
    padding: 10px
    display: inline-block
    text-decoration: none
    color: white
    background-color: blue
</style>

<script>
  // Import flextable
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
