<template lang="pug">
.ft-footer
  ft-pagesize
  ft-paginator
</template>

<script lang="babel">
import ftPagesize from './Pagesize';
import ftPaginator from './Paginator';

export default {
  components: {
    ftPagesize,
    ftPaginator,
  },
};
</script>
