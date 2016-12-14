<template lang="pug">
.ft-footer
  ft-pagesize(v-if="pagination")
    template(slot="pagesize" v-if="slots.scoped.pagesize" scope="p")
      slot(name="pagesize", :setLimit="p.setLimit")
  ft-paginator(v-if="pagination")
    template(slot="paginator" v-if="slots.scoped.paginator" scope="p")
      slot(name="paginator", :data="p.data")
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftPagesize from './Pagesize';
import ftPaginator from './Paginator';

export default {
  components: {
    ftPagesize,
    ftPaginator,
  },
  computed: {
    ...mapGetters([
      'slots',
      'pagination',
    ]),
  },
};
</script>
