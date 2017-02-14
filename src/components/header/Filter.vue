<template lang="pug">
  .ft-filter
    slot
      span(v-if="rows.length !== 0") Rows found: {{ rows.length }}
      =" "
      input(
        v-if="enabled",
        v-model="text",
        @input="filter($event.target.value)"
        )
      button(@click="toggle") Search
</template>

<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      rows: 'filter/rows',
    }),
  },
  data() {
    return {
      enabled: false,
      text: '',
    };
  },
  methods: {
    toggle() {
      this.enabled = !this.enabled;
      this.filter(this.enabled ? this.text : '');
    },
    filter(text) {
      this.$store.dispatch('filterSetText', { text });
    },
  },
};
</script>
