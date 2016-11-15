<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <flextable></flextable>
  </div>
</template>

<style lang="sass">
  html, body
    margin: 0
    padding: 0
    height: 100%

  body
    font-family: Helvetica, Arial, sans-serif
    display: flex
    align-items: center
    justify-content: center
</style>

<script>
import Flextable from './components/Flextable';

export default {
  name: 'app',
  data() {
    return {
      title: 'Flextable application example',
    };
  },
  components: {
    Flextable,
  },
};
</script>
