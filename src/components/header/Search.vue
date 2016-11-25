<template lang="pug">
  .ft-search
    input(
      v-if="enabled",
      v-model="text",
      @input="search"
      )
    button(@click="toggleSearch") &#128269;
</template>

<style lang="sass">
</style>

<script lang="babel">
import storeMixin from 'mixins/Store';

export default {
  mixins: [storeMixin],
  data() {
    return {
      text: '',
      enabled: false,
    };
  },
  methods: {
    search() {
      this.store.setSearchText(this.text);
    },
    toggleSearch() {
      this.enabled = !this.enabled;
      this.store.searchEnabled = this.enabled;
    },
  },
};
</script>
