<template lang="pug">
  #app
    .header
      h1 Flextable example
        =" "
        a(href="http://localhost:8090/users/").source + random data rest server
    .example
      // Usage example
      flextable(
        :config="config",
        :columns="columns",
        url="http://localhost:8090/users/",
        side="client",
        ref="flextable",
        v-on:rendered="rendered"
        v-on:selected="selected"
        v-on:sorted="sorted"
        v-on:filtered="filtered"
        )
        //- Custom layouting
        template(scope="p")
          //- Header component
          ft-header
            //- Title component
            ft-title
              template(v-if="p.selected.length > 0") Items selected: {{ p.selected.length }}
              template(v-else) Users table
                br
                select(v-model.number="ids")
                  option(value="0") All Ids
                  option(value="10000") Less than 10000
                select(v-model.number="addressId")
                  option(value="0") All addresses
                  option(v-for="n in 10", :value="n") {{ n }}
            //- Filter component
            ft-filter
              //- span(v-if="p.filterText") Rows found: {{ p.filteredTotal }}
              //- input(@input="p.filter($event.target.value)")
          //- Grid component
          ft-grid(v-if="p.dataLoaded")
            //- Grid heading component
            ft-heading
              //- Grid heading row component
              ft-heading-row
                //- //- Grid heading cell component
                ft-heading-cell(:column="{sortable: false, filterable: false}")
                ft-heading-cell(v-for="column in p.columns", :column="column")
                  template(slot="asc-icon") &#8593;
                  template(slot="desc-icon") &#8595;
            //- Grid row component for rows rendering
            ft-row(v-for="row in p.rowsToRender", :row="row")
              //- Cell component for custom value rendering by using named slots
              //- (names are same like column names)
              ft-cell(slot="multiSelect")
                input(
                  type="checkbox",
                  @click="p.toggleSelect(row)",
                  class="ft-clickable",
                  :checked="p.selected.indexOf(row) !== -1"
                  )
              ft-cell(slot="avatar", class="ft-align-center")
                img(:src="row.avatar", width="32", height="32")
              ft-cell(slot="address")
                div {{ row.address.id }}: {{ row.address.country }}, {{ row.address.city }}
              ft-cell(slot="options")
                button(@click="sync(Number(row.id))") Synchronize by id
                button(@click="sync(row)") Synchronize
                button(@click="remove(row)") Delete
          ft-state(v-else)
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
</template>

<style lang="sass">
@import '~assets/example.sass'

.example-blue
  color: blue !important

.example-bold
  font-weight: bold
</style>

<script lang="babel">
  export default {
    name: 'app',
    data() {
      return {
        ids: null,
        addressId: null,
        config: {
          multiSort: true,
          multiSelect: true,
          pageSize: 5,
          pageSizes: [{
            value: 1,
            name: 1,
          }, {
            value: 5,
            name: 5,
          }, {
            value: 0,
            name: 'no limit',
          }],
        },
        columns: [{
          name: 'id',
          label: 'Id',
          align: 'right',
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
          sortBy: 'address.id',
          filterBy: 'address.city',
        }, {
          name: 'email',
          label: 'E-mail',
          sortable: true,
        }, {
          name: 'phone',
          label: 'Phone',
          sortable: true,
          classes: 'example-blue example-bold',
        }, {
          name: 'avatar',
          label: 'Avatar',
          align: 'center',
          filterable: false,
          sortable: false,
        }, {
          name: 'options',
          label: 'Options',
          align: 'right',
          filterable: false,
          sortable: false,
        }],
      };
    },
    watch: {
      addressId(id) {
        this.$refs.flextable.filter({
          name: 'address',
          filterBy: 'address.id',
          value: id || false,
        });
      },
      ids(id) {
        this.$refs.flextable.filter({
          name: 'id',
          value: id || false,
          filterBy: (row) => {
            if (id === 0) {
              return true;
            }
            if (Number(row.id) < id) {
              return true;
            }
            return false;
          },
        });
      },
    },
    methods: {
      rendered({ rows }) {
        console.log(`Event rendered: ${rows}`);
      },
      selected({ rows }) {
        console.log(`Event selected: ${rows}`);
      },
      sorted({ status }) {
        console.log('Event sorted:', status);
      },
      filtered({ status }) {
        console.log('Event filtered:', status);
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
