<template lang="pug">
  .ft-filter
    slot
      span(v-if="status.filtered.length && value") Rows found: {{ status.filtered.length }}
      =" "
      input(
        v-if="enabled",
        v-model="value",
        @input="filter({ value: enabled ? value : '' })"
        )
      button(@click="toggle") Search
</template>

<script lang="babel">
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      status: 'filter/status',
    }),
  },
  data() {
    return {
      enabled: false,
      value: '',
    };
  },
  methods: {
    toggle() {
      const { value } = this;
      this.enabled = !this.enabled;
      this.filter({ value: this.enabled ? value : '' });
    },
    ...mapActions({
      filter: 'filter/filter',
    }),
  },
};
</script>
