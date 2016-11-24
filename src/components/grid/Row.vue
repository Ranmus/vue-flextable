<template lang="pug">
.ft-grid-row
  template(v-for="value, key in store.columns")
    ft-cell(
      v-if="store.columns[key].show !== false",
      :value="render(key)",
      :align="store.columns[key].align"
      )
</template>

<script lang="babel">
import storeMixin from 'mixins/Store';
import ftCell from './Cell';

export default {
  mixins: [storeMixin],
  components: { ftCell },
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  methods: {
    render(key) {
      if (this.store.columns[key].render) {
        return this.store.columns[key].render(this.row[key], this.row);
      }
      return this.row[key];
    },
  },
};
</script>
