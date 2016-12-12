<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'slots',
    ]),
  },
  render(createElement) {
    if (this.slots.named.nodata) {
      return createElement('div',
        {
          attrs: {
            class: 'ft-no-data',
          },
        },
        this.slots.named.nodata,
      );
    }
    return createElement('div', {
      attrs: {
        class: 'ft-no-data',
      },
      domProps: {
        innerHTML: 'No data',
      },
    });
  },
};
</script>
