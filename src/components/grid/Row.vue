<template lang="pug">
.ft-row(:class="{'ft-row-selected': isSelected}")
  slot
    template(v-if="multiSelect !== false")
      slot(name="multiSelect")
        ft-cell(:column="{name: 'multiSelect'}", value="")
          input(
            type="checkbox",
            class="ft-clickable",
            @click="toggleSelect(row)",
            :checked="isSelected",
            :value="row.id",
            )
    template(v-for="column in columns")
      slot(:name="column.name")
        ft-cell(:column="column", :value="row[column.name]")
</template>

<script lang="babel">
import { mapGetters, mapActions } from 'vuex';
import ftCell from './Cell';

export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  components: {
    ftCell,
  },
  computed: {
    isSelected() {
      return this.selected.indexOf(this.row) !== -1;
    },
    ...mapGetters([
      'selected',
      'multiSelect',
      'columns',
    ]),
  },
  methods: {
    toggleSelect(row) {
      this.$store.dispatch('toggleSelect', { row });
    },
    ...mapActions([
      'delete',
      'update',
    ]),
  },
};
</script>
