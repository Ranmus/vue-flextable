<template lang="pug">
  .flextable
    .loader(v-if="loading")
      flexspinner

    .flextable-table(v-else="loading")
      .flextable-row(v-for="row in rows")
        .flextable-cell(v-for="cell in row") {{ cell }}

</template>

<style lang="sass">
  $even-color: antiquewhite
  $odd-color: cornsilk

  .flextable
    border: 1px solid green
    padding: 10px

  .flextable-table
    display: flex
    flex-direction: column
    .flextable-row
      display: flex
      width: auto
      flex:
        direction: row
        wrap: nowrap
      &:nth-child(even)
        background: $even-color
      &:nth-child(odd)
        background: $odd-color

  .flextable-cell
    width: 100%
    overflow: hidden
    padding: 20px

  .loader
    border: 1px solid greenyellow
    display: flex
    justify-content: center
    align-items: center
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
