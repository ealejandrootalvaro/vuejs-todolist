<template>
  <v-app id="example-2" top-toolbar>
  <v-toolbar>
    <v-toolbar-side-icon @click.native.stop="nav2 = !nav2" />
    <v-toolbar-logo>
      <router-link to="/" class="white--text" id="nav">Proyectos</router-link>
    </v-toolbar-logo>
  </v-toolbar>

    <v-sidebar left fixed drawer v-model="nav2">
      <v-list>
        <v-list-item v-for="i in 3">
          <v-list-tile>
            <v-list-tile-title>Item {{ i }}</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-sidebar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
</v-app>

</template>

<script>
  export default {
    data () {
      return {
        item: {
          text: 'Get Started'
        },
        nav2: false

      }
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'

  #nav{
    text-decoration: none
  }

</style>
