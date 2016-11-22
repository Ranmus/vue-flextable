<template lang="pug">
  #app
    .header
      h1 Flextable example
        a(:href="config.data.url").source  + random data rest server

    .example
      // Usage example
      flextable(:config="config",:test="tester")
        template(slot="title") Users
        //- // Set custom title
        //- h1(slot="title") Users
        //- // Set rows per page text
        //- template(slot="rowsPerPage") Rows per Page:
        //- // Set pages of text
        //- template(slot="pageOf" scope="pages")  Page {{ pages.current }} of {{ pages.total }}
        //- // Set paginator buttons texts
        //- template(slot="prev") Previous
        //- template(slot="next") Next
        //- template(slot="first") First
        //- template(slot="last") Last
</template>

<style lang="sass">
//@import '~roboto-npm-webfont/style.css'
body
  color: #757575
  background: #fafafa
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
  import Flextable from './components/Flextable';

  const config = {
    data: {
      url: 'http://localhost:8090/users',
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
      phone: false,
      tablet: false,
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
      },
      options: {
        name: 'Options',
        align: 'right',
        render: (value, data) => `<button>${data.id}</button>`,
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
