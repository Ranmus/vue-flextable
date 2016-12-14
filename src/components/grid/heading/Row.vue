<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'slots',
      'device',
      'screen',
      'classes',
      'sort',
    ]),
  },
  methods: {
    sortBy(name) {
      this.$store.dispatch('sortBy', {
        name,
      });
    },
  },
  render(createElement) {
    const { isDesktop, isMobile, isPhone, isTablet, name } = this.device;
    const { size } = this.screen;

    return createElement('div',
      {
        attrs: {
          class: 'ft-heading-row',
        },
      },
      [this.slots.scoped.headingRow ? this.slots.scoped.headingRow({
        device: name,
        size,
        isDesktop,
        isMobile,
        isPhone,
        isTablet,
        sort: this.sort,
        sortBy: this.sortBy,
      }) : null],
    );
  },
};
</script>
