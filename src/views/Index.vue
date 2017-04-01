<template lang="html">
  <v-row style="padding:50px">
    <v-col xs4 v-for="proyecto in proyectos">
      <router-link :to="{name: 'proyecto', params: { id: proyecto.id}}" class="text--white"> Ver detalles</router-link>
      <v-card class="blue darken-4 white--text">
        <v-card-row height="200px">
          <v-card-title>
            <div>
            {{proyecto.nombre}} <br>
            <span >Responsable: <v-chip  class="secondary white--text">{{proyecto.responsable}}</v-chip></span><br>
            Estado: {{proyecto.estado}}
            </div>
          </v-card-title>
        </v-card-row>
        <v-card-row actions>
          <router-link :to="{name: 'proyecto', params: { id: proyecto.id}}" class="text--white"> Ver detalles</router-link>
          <v-spacer></v-spacer>
          <v-btn icon dark  v-on:click="onClick">
            <v-icon>event</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>
    </v-col>

  </v-row>
</template>

<script>
export default {
  methods: {
    onClick(){
      alert("hola")
    }
  },
  data(){
    return {
        nav2: false,

        proyectos: [
          {id:1,
          nombre: "Proyecto 1",
          responsable: "EAO",
          estado: "En ejecución"},
          {id:2,
          nombre: "Proyecto 2",
          responsable: "DBL",
          estado: "Sin iniciar"},
          {id:3,
          nombre: "Proyecto 3",
          responsable: "EAO",
          estado:"Terminado"}
        ],

        
    }
  },
}
</script>

<style lang="css">
</style>
