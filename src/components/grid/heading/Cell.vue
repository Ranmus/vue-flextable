<template lang="pug">
.ft-heading-cell(
  :class="[alignClass, {'ft-clickable': column.sortable !== false}, {'ft-heading-cell-sorted': sort.name === column.name && sort.name}, column.classes]",
  @click="column.sortable !== false && sortBy(column.name, column.sortFunction)")
  slot
    template(v-if="sort.name === column.name")
      template(v-if="column.align === 'right'")
        template(v-if="sort.order === 'asc'")
          slot(name="asc-icon") &#x25B2;
          template {{ column.label }}
        template(v-else)
          slot(name="desc-icon") &#x25BC;
          template {{ column.label }}
      template(v-else)
        template(v-if="sort.order === 'asc'") {{ column.label }}
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
    ...mapGetters([
      'sort',
    ]),
  },
  methods: {
    sortBy(name, func) {
      this.$store.dispatch('sortSetField', { name, func });
    },
  },
};
</script>
