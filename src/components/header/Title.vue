<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'selected',
      'slots',
    ]),
  },
  render(createElement) {
    return createElement('div',
      {
        attrs: {
          class: 'ft-header-title',
        },
      }, [
        this.selected.length === 0 ?
          this.slots.named.title :
          this.slots.scoped.selected({
            selected: this.selected,
          }),
      ],
    );
  },
};
</script>
