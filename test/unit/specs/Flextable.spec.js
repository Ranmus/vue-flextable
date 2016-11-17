import Vue from 'vue';
import Flextable from 'src/components/Flextable';

describe('Flextable.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Flextable),
    });
    expect(vm.$el.querySelector('.flextable .flextable-table').textContent);
  });
});
