<script lang="babel">
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'slotHeadingRow',
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
    ...mapActions([
      'sortBy',
    ]),
  },
  render(createElement) {
    return createElement('div',
      {
        attrs: {
          class: 'ft-heading-row',
        },
      },
      [this.slotsHeadingRow ? this.slotHeadingRow({
        device: this.device,
        size: this.size,
        isDesktop: this.isDesktop,
        isMobile: this.isMobile,
        isPhone: this.isPhone,
        isTablet: this.isTablet,
        sortBy: this.sortBy,
        sort: this.sort,
      }) : null],
    );
  },
};
</script>
