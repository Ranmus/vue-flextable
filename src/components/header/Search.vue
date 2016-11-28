<template lang="pug">
  .ft-search
    input(
      v-if="search.enabled",
      v-model="text",
      @input="searchText"
      )
    button(@click="toggleSearch") &#128269;
</template>

<script lang="babel">
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'search',
    ]),
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    searchText() {
      this.setSearchText(this.text);
    },
    toggleSearch() {
      this.setSearch(!this.search.enabled);
    },
    ...mapActions([
      'setSearch',
      'setSearchText',
    ]),
  },
};
</script>
