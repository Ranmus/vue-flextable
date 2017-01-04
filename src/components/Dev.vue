<template lang="pug">
  #app
    .header
      h1 Flextable example
        a(href="http://localhost:8090/users/").source  + random data rest server
    .example
      // Usage example
      flextable(
        :config="config",
        :columns="columns",
        url="http://localhost:8090/users/",
        side="client",
        ref="flextable")
        //- Custom layouting
        template(scope="p")
          //- Header component
          ft-header
            //- Title component
            ft-title Users table
            //- Filter component
            ft-filter
              span(v-if="p.found !== null") Rows found: {{ p.found }}
              input(@input="filter($event.target.value)")
          //- Footer component
          ft-footer
            //- Paginator component
            ft-paginator
              span Rows per page:
              select(@change="p.setPageSize(Number($event.target.value))")
                option(v-for="value in [1,5,10,0]", :selected="p.pageSize == value") {{ value || 'No limit' }}
              span Page {{ p.page }} of {{ p.pages }}
              button(@click="p.firstPage()") First
              button(@click="p.previousPage()") Previous
              button(@click="p.nextPage()") Next
              button(@click="p.lastPage()") Last

        template(slot="nodata") No users loaded

        template(slot="selected" scope="p") {{ p.selected.length }} {{ p.selected.length === 1 ? 'item' : 'items' }} selected

        template(slot="headingRow" scope="p")
          .ft-heading-cell
          .ft-heading-cell(
            v-for="column in columns",
            :class="[column.classes, {'ft-clickable' : column.sortable}]",
            @click="column.sortable && p.sortBy(column.name)"
            )
            div {{ column.label }}
            div(v-if="p.sort.name == column.name")
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
            template(v-if="column.name == 'avatar'")
              img(:src="p.data.avatar", width="32", height="32")
            template(v-else-if="column.name == 'options'") {{ p.data[column.id] }}
              button(@click="sync(Number(p.data.id))") Synchronize by id
              button(@click="sync(p.data)") Synchronize
              button(@click="remove(p.data)") Delete
            template(v-else) {{ p.data[column.name] }}
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
        page: 0,
        pages: 0,
        config: {
          // pageSize: 5,
          // limits: [{
          //   value: 1,
          //   name: 1,
          // }, {
          //   value: 5,
          //   name: 5,
          // }, {
          //   value: 0,
          //   name: 'no limit',
          // }],
          rowsHeight: '100px',
        },
        selected: [],
        columns: [{
          name: 'id',
          label: 'Id',
          align: 'right',
          classes: 'ft-align-right',
          sortable: true,
        }, {
          name: 'firstName',
          label: 'First name',
          sortable: true,
        }, {
          name: 'lastName',
          label: 'Last name',
          sortable: true,
        }, {
          name: 'address',
          label: 'Address',
          sortable: true,
          filterable: true,
        }, {
          name: 'email',
          label: 'E-mail',
          sortable: true,
        }, {
          name: 'phone',
          label: 'Phone',
          sortable: true,
        }, {
          name: 'avatar',
          label: 'Avatar',
          align: 'center',
          classes: 'ft-align-center',
          filterable: false,
        }, {
          name: 'options',
          label: 'Options',
          align: 'right',
          classes: 'ft-align-right',
          filterable: false,
        }],
      };
    },
    methods: {
      filter(text) {
        this.$refs.flextable.filter(text);
      },
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
