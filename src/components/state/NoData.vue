<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'namedSlots',
    ]),
  },
  render(createElement) {
    if (this.namedSlots.nodata) {
      return createElement('div',
        {
          attrs: {
            class: 'ft-no-data',
          },
        },
        this.namedSlots.nodata,
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
