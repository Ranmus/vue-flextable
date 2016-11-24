<template lang="pug">
.ft-header-title
  slot(name="title") {{ title }}
</template>

<style lang="sass">
.ft-header-title
  padding: 20px 16px 20px 16px
  font:
    size: 2.0em
    weight: bold
</style>

<script lang="babel">
export default {};
</script>
