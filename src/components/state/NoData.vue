<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'slotNoData',
    ]),
  },
  render(createElement) {
    if (this.slotNoData) {
      return createElement('div',
        {
          attrs: {
            class: 'ft-no-data',
          },
        },
        this.slotNoData,
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
