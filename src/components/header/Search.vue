<template lang="pug">
  .ft-search
    slot(name="search", :filterBy="filterBy")
      input(
        v-if="search.enabled",
        v-model="text",
        @input="filterBy({text: $event.target.value})"
        )
      button(@click="toggleSearch").ft-search-button &#128269;
</template>

<script lang="babel">
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'search',
      'scopedSlots',
    ]),
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    filterBy(text) {
      this.$store.dispatch('filterBy', {
        text,
      });
    },
    toggleSearch() {
      this.setSearch(!this.search.enabled);
    },
    ...mapActions([
      'setSearch',
    ]),
  },
};
</script>
