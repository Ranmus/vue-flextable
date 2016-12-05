<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['slots']),
  },
  render(createElement) {
    return createElement('div',
      {
        attrs: {
          class: 'ft-header-title',
        },
      },
      this.slots.title,
    );
  },
};
</script>
