<template lang="pug">
  #app
    h1 Flextable application example
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
    columns: {
      id: {
        name: 'Id',
        align: 'right',
      },
      firstName: {
        name: 'First name',
      },
      lastName: {
        name: 'Last name',
      },
      email: {
        name: 'E-mail',
      },
      phone: {
        name: 'Phone',
      },
      avatar: {
        name: 'Avatar',
        align: 'center',
        render: value => `<img src="${value}" width="32" height="32"/>`,
        show: true,
      },
    },
  };

  export default {
    name: 'app',
    data() {
      return {
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
