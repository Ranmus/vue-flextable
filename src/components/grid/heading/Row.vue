<template lang="pug">
.ft-heading-row
  template(v-for="column in store.columns")
    ft-heading-cell(
      v-if="column.show !== false",
      :value="column.name",
      :align="column.align",
      :sortable="column.sortable !== false"
      )
</template>

<script lang="babel">
import storeMixin from 'mixins/Store';
import ftHeadingCell from './Cell';

export default {
  mixins: [storeMixin],
  components: { ftHeadingCell },
};
</script>
