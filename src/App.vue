<template lang="pug">
  #app
    .header
      h1 Flextable example
        a(href="http://localhost:8090/users/").source  + random data rest server

    .example
      // Usage example
      flextable(
        url="http://localhost:8090/users/",
        side="server",
        :limit.number="5",
        :limits="[1,5,10,20,30,50,100]",
        :searchable="['id', 'firstName', 'lastName', 'email', 'phone']",
        )
        template(slot="title") Users first table
        template(slot="nodata") No users loaded
        template(slot="headingRow" scope="p")
          template(v-if="p.size == 'large' && p.isMobile === false")
            .ft-heading-cell.ft-sortable.ft-align-right(@click="p.sortBy('id')")
              span(v-if="p.sort.name == 'id' && p.sort.order == 'asc'") &#x25B2; 
              span(v-if="p.sort.name == 'id' && p.sort.order == 'desc'") &#x25BC; 
              span Id
            .ft-heading-cell.ft-sortable(@click="p.sortBy('firstName')")
              span First name
              span(v-if="p.sort.name == 'firstName' && p.sort.order == 'asc'") &#x25B2; 
              span(v-if="p.sort.name == 'firstName' && p.sort.order == 'desc'") &#x25BC; 
            .ft-heading-cell.ft-sortable(@click="p.sortBy('lastName')")
              span Last name
              span(v-if="p.sort.name == 'lastName' && p.sort.order == 'asc'") &#x25B2; 
              span(v-if="p.sort.name == 'lastName' && p.sort.order == 'desc'") &#x25BC; 
            .ft-heading-cell.ft-sortable(@click="p.sortBy('email')")
              span E-mail
              span(v-if="p.sort.name == 'email' && p.sort.order == 'asc'") &#x25B2; 
              span(v-if="p.sort.name == 'email' && p.sort.order == 'desc'") &#x25BC; 
            .ft-heading-cell.ft-sortable(@click="p.sortBy('phone')")
              span Phone
              span(v-if="p.sort.name == 'phone' && p.sort.order == 'asc'") &#x25B2; 
              span(v-if="p.sort.name == 'phone' && p.sort.order == 'desc'") &#x25BC; 
            .ft-heading-cell.ft-align-center Avatar
            .ft-heading-cell.ft-align-right Options
          template(v-if="p.size == 'medium' && p.isMobile === false")
            .ft-heading-cell.ft-sortable.ft-align-right Id
            .ft-heading-cell.ft-sortable Full name
            .ft-heading-cell.ft-sortable E-mail / Phone
            .ft-heading-cell.ft-align-center Avatar
            .ft-heading-cell.ft-align-right Options
        template(slot="row" scope="p")
          template(v-if="p.size == 'large' && p.isMobile === false")
            .ft-cell.ft-align-right {{ p.data.id }}
            .ft-cell {{ p.data.firstName }}
            .ft-cell {{ p.data.lastName }}
            .ft-cell {{ p.data.email }}
            .ft-cell {{ p.data.phone }}
            .ft-cell.ft-align-center
              img(:src="p.data.avatar", width="32", height="32")
            .ft-cell.ft-align-right
              button(@click="p.delete(p.data.id)") &#x2718;
          template(v-if="p.size == 'medium' && p.isMobile === false")
            .ft-cell.ft-align-right {{ p.data.id }}
            .ft-cell {{ p.data.firstName }} {{ p.data.lastName }}
            .ft-cell
              div {{ p.data.email }}
              div {{ p.data.phone }}
            .ft-cell.ft-align-center
              img(:src="p.data.avatar", width="32", height="32")
            .ft-cell.ft-align-right
              button(@click="remove(p.data.id)") {{ p.data.id }}
          template(v-if="p.size == 'small' || p.isMobile == true")
            .ft-cell
              input(type="checkbox").ft-accordion
              .ft-accordion-title(style="display: flex; justify-content: space-around")
                div(style="width: 100%").ft-align-center
                  img(:src="p.data.avatar", width="32", height="32")
                div(style="padding: 8px; width: 100%").ft-align-left {{ p.data.firstName }} {{ p.data.lastName }}
              .ft-accordion-panel
                p E-mail: {{ p.data.email }}
                p Phone: {{ p.data.phone }}
                .ft-align-right
                  button(@click="remove(p.data.id)") {{ p.data.id }}
</template>

<style lang="sass">
@import '~roboto-npm-webfont/style.css'
@import 'assets/example.sass'
</style>

<script lang="babel">
  import Flextable from 'components/Flextable';

  export default {
    name: 'app',
    components: {
      Flextable,
    },
    methods: {
      edit(data) {
        console.log(data);
      },
      remove(data) {
        console.log(data);
      },
    },
  };
</script>
