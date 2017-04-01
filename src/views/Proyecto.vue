<template lang="html">
  <v-row style="padding:50px">
  <h1>Soy el proyecto</h1>
  <v-col xs12 class="" v-for="tarea in tareas">
    <h3>{{tarea.title}}</h3>
    <p>Estado: {{tarea.completed}}</p>
  </v-col>
  </v-row>
</template>

<script>

import axios from 'axios'

export default {

  data(){
    return {
      mensaje: "Este es un mensaje",
      tareas: []
    }
  },

  mounted(){
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
      this.tareas = response.data;
    })

  }
}
</script>

<style lang="css" >

</style>
