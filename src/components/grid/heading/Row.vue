<template lang="pug">
.ft-heading-row
  slot
    ft-heading-cell(v-if="multiSelect !== false", :column="{sortable:false, filterable: false}")
    ft-heading-cell(v-for="column in columns", :column="column")
</template>

<script lang="babel">
import { mapGetters } from 'vuex';
import ftHeadingCell from './Cell';

export default {
  components: {
    ftHeadingCell,
  },
  computed: {
    ...mapGetters([
      'columns',
      'multiSelect',
    ]),
  },
  methods: {
    sortBy(name) {
      this.$store.dispatch('sortBy', {
        name,
      });
    },
  },
};
</script>
