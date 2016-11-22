<template lang="pug">
.ft-footer
  slot(name="pageSize")
  slot(name="paginator")
</template>

<style lang="sass">
.ft-footer
  height: 10px
  text-align: right
  padding: 20px
</style>

<script lang="babel">
export default {};
</script>
