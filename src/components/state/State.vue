<template lang="pug">
.ft-loader
  ft-spinner(v-if="loading")
  ft-no-data(v-else="loading")
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
      'loading',
    ]),
  },
};
</script>
