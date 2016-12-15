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
    isSelected() {
      return this.selected.indexOf(this.row) !== -1;
    },
    ...mapGetters([
      'slots',
      'device',
      'screen',
      'classes',
      'selected',
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

    const toggleSelect = () => {
      this.$store.dispatch('toggleSelect', { row: this.row });
    };

    return createElement('div',
      {
        class: {
          'ft-row': true,
          'ft-row-selected': this.isSelected,
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
        toggleSelect,
        isSelected: this.isSelected,
      }) : null],
    );
  },
};
</script>
