<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['slotTitle']),
  },
  render(createElement) {
    return createElement('div',
      {
        attrs: {
          class: 'ft-header-title',
        },
      },
      this.slotTitle,
    );
  },
};
</script>
