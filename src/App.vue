<template lang="pug">
  #app
    .header
      h1 Flextable example
        a(:href="config.data.url").source  + random data rest server

    .example
      // Usage example
      flextable(:config="config")
        template(slot="title") Users first table
      br
      flextable(:config="config")
        template(slot="title") Users second table
</template>

<style lang="sass">
@import '~roboto-npm-webfont/style.css'
body
  color: #757575
  background: #e8e8e8
  padding: 0
  margin: 0
  font:
    family: Roboto, Helvetica, Arial, sans-serif
    size: 13px

.header
  color: white
  position: relative
  padding: 10px 10% 10px 10%
  background: #305
  .source
    color: rgba(white, 0.5)
    margin-bottom: 10px
    text-decoration: none

.example
  margin: 50px 10% 50px 10%
</style>

<script lang="babel">
  // Import flextable
  import Flextable from 'components/Flextable';

  const config = {
    data: {
      url: 'http://localhost:8090/users/',
      side: 'client',
    },
    heading: {
      // title: 'Users (Title set via config)',
    },
    pagination: {
      enabled: true,
      limit: 5,
    },
    wrap: {
      phone: true,
      tablet: true,
      desktop: false,
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
        searchable: false,
      },
      options: {
        name: 'Options',
        align: 'right',
        render: (value, data) => `<button>${data.id}</button>`,
        show: true,
        sortable: false,
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
