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
      'slots',
      'device',
      'screen',
      'classes',
    ]),
  },
  methods: {
    ...mapActions([
      'delete',
      'update',
    ]),
  },
  render(createElement) {
    const { isDesktop, isMobile, isPhone, isTablet, name } = this.device;
    const { size } = this.screen;

    return createElement('div',
      {
        attrs: {
          class: 'ft-row',
        },
      },
      [this.slots.scoped.row ? this.slots.scoped.row({
        data: this.row,
        device: name,
        size,
        isDesktop,
        isMobile,
        isPhone,
        isTablet,
        update: this.update,
        delete: this.delete,
      }) : null],
    );
  },
};
</script>
