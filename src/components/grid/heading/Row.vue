<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'scopedSlots',
      'device',
      'size',
      'isDesktop',
      'isMobile',
      'isPhone',
      'isTablet',
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
    return createElement('div',
      {
        attrs: {
          class: 'ft-heading-row',
        },
      },
      [this.scopedSlots.headingRow ? this.scopedSlots.headingRow({
        device: this.device,
        size: this.size,
        isDesktop: this.isDesktop,
        isMobile: this.isMobile,
        isPhone: this.isPhone,
        isTablet: this.isTablet,
        sort: this.sort,
        sortBy: this.sortBy,
      }) : null],
    );
  },
};
</script>
