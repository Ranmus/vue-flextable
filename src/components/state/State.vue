<template lang="pug">
.ft-loader
  ft-spinner(v-if="dataLoading")
  ft-no-data(v-else="dataLoading")
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftNoData from './NoData';
import ftSpinner from './Spinner';

export default {
  components: {
    ftNoData,
    ftSpinner,
  },
  computed: {
    ...mapGetters([
      'dataLoading',
    ]),
  },
};
</script>
