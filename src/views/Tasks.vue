<template lang="html">
  <div class="container-fluid">
    <div class="col-md-12">
      <h2>User: {{$route.params.id}}</h2>
    </div>
    <div class="col-md-6">

            <div class="todolist not-done">
             <h3>Todos</h3>
             <input type="text" class="form-control add-todo" placeholder="Add todo" v-model="element"><button class="btn btn-success" v-on:click="addTodo" id="btnAdd">Add</button>
             <hr>
                    <ul id="sortable" class="list-unstyled" v-for="task in todos">
                      <li class="ui-state-default">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="" v-on:click="toDone(task)" />{{task.title}}</label>
                        </div>

                      </li>
                    </ul>
                    <div class="todo-footer">
                      <strong><span class="count-todos">{{todos.length}}</span></strong> Items Left
                    </div>
              </div>
    </div>
    <div class="col-md-6">
      <div class="todolist">
        <h3>Alredy Done</h3>
        <ul id="done-items" class="list-unstyled" v-for="task in done">
          <li>{{task.title}} <button class="remove-item btn btn-default btn-xs pull-right" v-on:click="toTodo(task)"><span class="glyphicon glyphicon-remove"></span></button></li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>

import axios from 'axios'

export default {

  data(){
    return {
      tasks: [],
      element: ""
    }
  },

  computed: {
    todos(){
      return this.tasks.filter(item => !item.completed);
    },

    done(){
      return this.tasks.filter(item => item.completed);
    }
  },

  methods: {
    toTodo(task){
      task.completed = false;
    },

    toDone(task){
      task.completed = true;
    },

    addTodo(){
      if(this.element != ""){
        this.tasks.push({title: this.element, completed: false});
        this.element = "";
      }
    }
  },

  mounted(){
    axios.get("https://jsonplaceholder.typicode.com/todos?userId=1").then(response => {this.tasks = response.data});
  }
}
</script>

<style lang="css">
.todolist{
    background-color:#FFF;
    padding:20px 20px 10px 20px;
    margin-top:30px;
}
.todolist h3{
    margin:0;
    padding-bottom:20px;
    text-align:center;
}
.form-control{
    border-radius:0;
}
li.ui-state-default{
    background:#fff;
    border:none;
    border-bottom:1px solid #ddd;
}

li.ui-state-default:last-child{
    border-bottom:none;
}

.todo-footer{
    background-color:#F4FCE8;
    margin:0 -20px -10px -20px;
    padding: 10px 20px;
}
#done-items li{
    padding:10px 0;
    border-bottom:1px solid #ddd;
    text-decoration:line-through;
}
#done-items li:last-child{
    border-bottom:none;
}
#checkAll{
    margin-top:10px;
}

#btnAdd{
  background-color: green !important;
  color: black !important;
  margin-left: 0
}
</style>
