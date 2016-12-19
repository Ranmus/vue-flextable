<template lang="pug">
  #app
    .header
      h1 Flextable example
        a(href="http://localhost:8090/users/").source  + random data rest server
    .example
      // Usage example
      flextable(
        url="http://localhost:8090/users/",
        side="client",
        :limit.number="5",
        :limits="[1,5,10,20,30,50,100]",
        :searchable="['id', 'firstName', 'lastName', 'email', 'phone']",
        ref="flextable")

        template(slot="nodata") No users loaded

        template(slot="title") Users first table

        template(slot="selected" scope="p") {{ p.selected.length }} {{ p.selected.length === 1 ? 'item' : 'items' }} selected

        template(slot="search" scope="p")
          input(@input="p.filterBy($event.target.value)")

        template(slot="pagesize" scope="p")
          span Rows per page:
          select(@input="p.setLimit(Number($event.target.value))")
            option(value="1") 1
            option(value="5" selected="selected") 5
            option(value="10") 10
            option(value="20") 20
            option(value="50") 50
            option(value="100") 100

        template(slot="paginator" scope="p")
          span Page {{ p.page }} of {{ p.pages }}
          button(@click="p.first()") First
          button(@click="p.prev()") Previous
          button(@click="p.next()") Next
          button(@click="p.last()") Last

        template(slot="headingRow" scope="p")
          .ft-heading-cell
          .ft-heading-cell(
            v-for="column in columns",
            :class="[column.classes, {'ft-clickable' : column.sortable}]",
            @click="column.sortable && p.sortBy(column.id)"
            )
            div {{ column.name }}
            div(v-if="p.sort.name == column.id")
              span(v-if="p.sort.order == 'asc'") &#x25B2;
              span(v-else) &#x25BC;

        template(slot="row" scope="p")
          .ft-cell
            input(
              type="checkbox",
              :id="p.data.id",
              :value="p.data",
              @click="toggleSelect(p.data)",
              :checked="p.isSelected"
              class="ft-clickable")
          .ft-cell(v-for="column in columns", :class="column.classes")
            template(v-if="column.id == 'avatar'")
              img(:src="p.data.avatar", width="32", height="32")
            template(v-else-if="column.id == 'options'") {{ p.data[column.id] }}
              button(@click="sync(Number(p.data.id))") Synchronize by id
              button(@click="sync(p.data)") Synchronize
              button(@click="remove(p.data)") Delete
            template(v-else) {{ p.data[column.id] }}
</template>

<style lang="sass">
@import '~roboto-npm-webfont/style.css'
@import '~assets/example.sass'
</style>

<script lang="babel">
  export default {
    name: 'app',
    data() {
      return {
        selected: [],
        filter: false,
        columns: [{
          id: 'id',
          align: 'right',
          classes: 'ft-align-right',
          name: 'Id',
          sortable: true,
        }, {
          id: 'firstName',
          name: 'First name',
          sortable: true,
        }, {
          id: 'lastName',
          name: 'Last name',
          sortable: true,
        }, {
          id: 'email',
          name: 'E-mail',
          sortable: true,
        }, {
          id: 'phone',
          name: 'Phone',
          sortable: true,
        }, {
          id: 'avatar',
          align: 'center',
          classes: 'ft-align-center',
          name: 'Avatar',
        }, {
          id: 'options',
          align: 'right',
          classes: 'ft-align-right',
          name: 'Options',
        }],
      };
    },
    methods: {
      toggleSelect(row) {
        this.$refs.flextable.toggleSelect(row);
        this.selected = this.$refs.flextable.getSelected();
      },
      sync(row) {
        const returned = this.$refs.flextable.sync(row);

        returned.then((state) => {
          console.log(state);
        });
      },
      remove(row) {
        this.$refs.flextable.delete(row).then(() => {
          console.log(`row with id ${row.id} deleted`);
        });
      },
    },
  };
</script>
