<template lang="pug">
  .flextable
    .loader(v-if="loading")
      flexspinner

    .flextable-table(v-else="loading")
      .flextable-row.header
        .flextable-cell(v-for="cell in rows[0]") header
      .flextable-row(v-for="row in rows")
        .flextable-cell(v-for="cell in row") {{ cell }}

</template>

<style lang="sass">
  @mixin shadow
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)

  .flextable
    background: #fff
    @include shadow

  .flextable-table
    display: flex
    flex-direction: column
    border:
      collapse: collapse
    .flextable-row
      display: flex
      width: auto
      border:
        bottom: 1px solid #c7c7c7
      flex:
        direction: row
        wrap: nowrap
      .flextable-cell
        width: 100%
        overflow: hidden
        padding: 20px

  .header
    font:
      weight: bold
  .loader
    display: flex
    justify-content: center
    align-items: center
    padding: 50px
</style>

<script>
  import Flexspinner from './Flexspinner';

  export default {
    props: ['url'],
    data() {
      return {
        message: 'Flextable container',
        rows: {
          all: [],
          current: [],
        },
        loading: true,
        resource: null,
      };
    },
    components: {
      Flexspinner,
    },

    mounted() {
      this.resource = this.$resource(this.url);

      this.resource.get().then((response) => {
        this.rows = response.data;
        this.loading = false;
      });
    },
  };
</script>
