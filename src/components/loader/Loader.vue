<template lang="pug">
.ft-loader
  ft-spinner
</template>

<style lang="sass">
.ft-loader
  display: flex
  justify-content: center
  align-items: center
  padding: 50px
</style>

<script lang="babel">
import ftSpinner from './Spinner';

export default {
  components: {
    ftSpinner,
  },
};
</script>
