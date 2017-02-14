<template lang="pug">
.ft-heading-cell(
  :class="[alignClass, {'ft-clickable': column.sortable !== false}, {'ft-heading-cell-sorted': sorting}, column.classes]",
  @click="sort({ name: column.name })")
  slot
    template(v-if="sorting")
      template(v-if="column.align === 'right'")
        template(v-if="sortingOrder === 'asc'")
          slot(name="asc-icon") &#x25B2;
          template {{ column.label }}
        template(v-else)
          slot(name="desc-icon") &#x25BC;
          template {{ column.label }}
      template(v-else)
        template(v-if="sortingOrder === 'asc'") {{ column.label }}
          slot(name="asc-icon") &#x25B2;
        template(v-else) {{ column.label }}
          slot(name="desc-icon") &#x25BC;
    template(v-else) {{ column.label }}
</template>

<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  props: {
    column: {
      required: false,
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    sorting() {
      return this.status[this.column.name] !== undefined;
    },
    sortingOrder() {
      return this.sorting ? this.status[this.column.name].order : null;
    },
    alignClass() {
      const { align } = this.column;
      let alignClass = 'ft-align-left';

      if (align === 'center') {
        alignClass = 'ft-align-center';
      } else if (align === 'right') {
        alignClass = 'ft-align-right';
      }

      return alignClass;
    },
    ...mapGetters({
      status: 'sort/status',
    }),
  },
  methods: {
    sort({ name }) {
      this.$store.dispatch('sort/sort', { name });
    },
  },
};
</script>
