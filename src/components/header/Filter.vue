<template lang="pug">
  .ft-filter
    slot
      span(v-if="filteredTotal !== null") Rows found: {{ filteredTotal }} 
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
    ...mapGetters([
      'filteredTotal',
    ]),
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
