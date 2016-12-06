<script lang="babel">
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters([
      'scopedSlots',
      'device',
      'size',
      'isDesktop',
      'isMobile',
      'isPhone',
      'isTablet',
    ]),
  },
  methods: {
    ...mapActions([
      'delete',
      'update',
    ]),
  },
  render(createElement) {
    return createElement('div',
      {
        attrs: {
          class: 'ft-row',
        },
      },
      [this.scopedSlots.row ? this.scopedSlots.row({
        data: this.row,
        device: this.device,
        size: this.size,
        isDesktop: this.isDesktop,
        isMobile: this.isMobile,
        isPhone: this.isPhone,
        isTablet: this.isTablet,
        update: this.update,
        delete: this.delete,
      }) : null],
    );
  },
};
</script>
