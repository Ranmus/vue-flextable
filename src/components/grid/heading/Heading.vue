<template lang="pug">
.ft-heading
  ft-heading-row(:store="store")
</template>

<script lang="babel">
import storeMixin from 'mixins/Store';
import ftHeadingRow from './Row';

export default {
  mixins: [storeMixin],
  components: { ftHeadingRow },
};
</script>
