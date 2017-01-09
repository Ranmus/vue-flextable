<template lang="pug">
.ft-header-title
  slot
    template(v-if="multiSelect")
      template(v-if="selected.length")
        slot(name="items-selected") Items selected: {{ selected.length }}
      template(v-else) Default title
    template(v-else) Default title
</template>

<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'multiSelect',
      'selected',
    ]),
  },
};
</script>
