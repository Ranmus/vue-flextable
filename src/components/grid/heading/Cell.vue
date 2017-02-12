<template lang="pug">
.ft-heading-cell(
  :class="[alignClass, {'ft-clickable': column.sortable !== false}, {'ft-heading-cell-sorted': sort.name === column.name && sort.name}, column.classes]",
  @click="sort({ name: column.name })")
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
  },
  methods: {
    sort({ name }) {
      this.$store.dispatch('sort/sort', { name });
    },
  },
};
</script>
