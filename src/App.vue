<template lang="pug">
  #app
    h1 {{ title }}
    a(:href="config.data.url").source Mocked REST server
    flextable(:config="config",:test="tester")
</template>

<script lang="babel">
  // Import flextable
  import Flextable from './components/Flextable';

  const config = {
    data: {
      url: 'http://localhost:8090/users',
      side: 'client',
    },
    pagination: {
      enabled: true,
      limit: 10,
    },
  };

  export default {
    name: 'app',
    data() {
      return {
        title: 'Flextable application example',
        config,
      };
    },
    components: {
      Flextable,
    },
  };
</script>

<style lang="sass">
  @import '~roboto-npm-webfont/style.css'

  @mixin button
    display: inline-block
    color: white
    padding: 10px
    text-decoration: none
    background: blue
    cursor: pointer

  body
    color: #757575
    background: #fafafa
    padding: 20px 10% 20px 10%
    font:
      family: Roboto, Helvetica, Arial sans-serif
      size: 13px

  a.source
    @include button()
    margin-bottom: 10px
</style>
