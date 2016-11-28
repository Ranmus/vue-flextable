<template>
<div id="app">
  <div class="header">
    <h1>Flextable example
      <a href="" class="source"> + random date rest server</a>
    </h1>
  </div>

  <div class="example">
    <flextable
      url="http://localhost:8090/users/"
      side="client"
      :limit.number="5"
      :limits="[5,10,20,30,50]"
      :searchable="['id', 'firstName', 'lastName']"
      >
      <template slot="headingRow" scope="p">
        <template v-if="p.size == 'large'">
          <div class="ft-heading-cell ft-align-right">Id</div>
          <div class="ft-heading-cell">First name</div>
          <div class="ft-heading-cell">Last name</div>
          <div class="ft-heading-cell">E-mail</div>
          <div class="ft-heading-cell">Phone</div>
          <div class="ft-heading-cell ft-align-center">Photo</div>
          <div class="ft-heading-cell ft-align-right">Options</div>
        </template>
        <template v-if="p.size == 'medium'">
          <div class="ft-heading-cell ft-align-right">Id</div>
          <div class="ft-heading-cell">Full name</div>
          <div class="ft-heading-cell">E-mail / Phone</div>
          <div class="ft-heading-cell ft-align-center">Photo</div>
          <div class="ft-heading-cell ft-align-right">Options</div>
        </template>
      </template>
      <template slot="row" scope="p">
        <template v-if="p.size == 'large'">
          <div class="ft-cell ft-align-right">{{ p.data.id }}</div>
          <div class="ft-cell">{{ p.data.firstName }}</div>
          <div class="ft-cell">{{ p.data.lastName }}</div>
          <div class="ft-cell">{{ p.data.email }}</div>
          <div class="ft-cell">{{ p.data.phone }}</div>
          <div class="ft-cell ft-align-center">
            <img :src="p.data.avatar" width="32" height="32" />
          </div>
          <div class="ft-cell ft-align-right">
            <button @click="p.delete(p.data.id)">Delete</button>
          </div>
        </template>
        <template v-if="p.size == 'medium'">
          <div class="ft-cell ft-align-right">{{ p.data.id }}</div>
          <div class="ft-cell">{{ p.data.lastName }} {{ p.data.firstName }}</div>
          <div class="ft-cell">{{ p.data.email }}<br />{{ p.data.phone }}</div>
          <div class="ft-cell ft-align-center">
            <img :src="p.data.avatar" width="32" height="32" />
          </div>
          <div class="ft-cell ft-align-right">
            <button @click="p.delete(p.data.id)">Delete</button>
          </div>
        </template>
        <template v-if="p.size == 'small' || p.isMobile == true">
          <div class="ft-cell">
            <input type="checkbox" class="ft-accordion" />
            <div class="ft-accordion-title" style="display: flex; justify-content: space-around">
              <div><img :src="p.data.avatar" width="32" height="32" /></div>
              <div>{{ p.data.lastName }} {{ p.data.firstName}}</div>
            </div>
            <div class="ft-accordion-panel">
              <p><b>Phone:</b> {{ p.data.phone }}</p>
              <p><b>E-mail:</b> {{ p.data.email }}</p>
              <div class="ft-align-right">
                <button @click="p.delete(p.data.id)">Delete</button>
              </div>
            </div>
          </div>
        </template>
      </template>
    </flextable>
  </div>
</div>
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
