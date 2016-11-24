<template lang="pug">
.ft-footer
  ft-pagesize(:store="store")
  ft-paginator(:store="store")
</template>

<style lang="sass">
.ft-footer
  display: flex
  justify-content: flex-end
  padding: 20px 16px
</style>

<script lang="babel">
import ftPagesize from './Pagesize';
import ftPaginator from './Paginator';

export default {
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
  components: {
    ftPagesize,
    ftPaginator,
  },
};
</script>
