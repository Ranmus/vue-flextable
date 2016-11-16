<template lang="pug">
  .flexspinner
</template>

<style lang="sass">
  $size: 100px
  $weight: 12px
  $radius: 50%
  $color: #2196F3
  $alpha: 0.2
  $speed: 1s

  .flexspinner
    width: $size
    height: $size
    animation: flexspinner $speed infinite linear
    border:
      right: $weight solid $color
      bottom: $weight solid rgba($color, $alpha)
      left: $weight solid rgba($color, $alpha)
      top: $weight solid rgba($color, $alpha)
      radius: $radius

  @keyframes flexspinner
    0%
      transform: rotate(90deg)
    100%
      transform: rotate(450deg)
</style>

<script>
  export default {
    data() {
      return {
      };
    },
  };
</script>
