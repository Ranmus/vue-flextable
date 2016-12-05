<template lang="pug">
.ft-footer
  ft-pagesize
    template(slot="pagesize" v-if="scopedSlots.pagesize" scope="p")
      slot(name="pagesize", :setLimit="p.setLimit")
  ft-paginator
    template(slot="paginator" v-if="scopedSlots.paginator" scope="p")
      slot(name="paginator", :page="p.page", :pages="p.pages", :first="p.first", :prev="p.prev", :next="p.next", :last="p.last")
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
      'dataLoaded',
      'slotTitle',
      'slots',
    ]),
  },
};
</script>
