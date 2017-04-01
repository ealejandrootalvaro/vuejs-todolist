<template lang="html">

<div class="row">
  <div class="col-md-12">
    <h2>Users</h2>
    <table class="table">
      <thead>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td><router-link :to="{name: 'taskUser', params: {id: user.id}}">{{user.name}}</router-link></td>
          <td>{{user.username}}</td>
          <td>{{user.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      users: []
    }
  },

  mounted(){
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.users = response.data
    })
  }
}
</script>

<style lang="css">
</style>
