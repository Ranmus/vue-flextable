<template lang="pug">
.ft-title
  slot(name="title") {{ title }}
</template>

<style lang="sass">
.ft-title
  padding: 10px 16px
  font:
    size: 2.0em
    weight: bold
</style>

<script lang="babel">
export default {};
</script>
