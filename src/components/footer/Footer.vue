<template lang="pug">
.ft-footer
  ft-pagesize(:store="store")
  ft-paginator(:store="store")
</template>

<script lang="babel">
import storeMixin from 'mixins/Store';
import ftPagesize from './Pagesize';
import ftPaginator from './Paginator';

export default {
  mixins: [storeMixin],
  components: {
    ftPagesize,
    ftPaginator,
  },
};
</script>
