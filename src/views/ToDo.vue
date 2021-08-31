<template>
  <div class="Todo">
    <h1>To Do list</h1>
  <form @submit.prevent="addNewTodo">
    <label>Things to do: </label>
    <p><input v-model="newTodo" name="newTodo"></p>
    <button>To do</button>
    </form>
    <button @click="RemoveAll">Remove all</button>
    <button @click="MarkAllDone">Mark all done</button>
  
  <ul>
    <li v-for="(todo, index) in todos" class="list" :key="todo.id">
    <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">{{ todo.content }}
        <button @click="removeTodo(index)">X</button></h3>
    
    </li>
  </ul>
    
  
</div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const newTodo = ref('');
    const todos = ref([]);

    function addNewTodo(){
      todos.value.push({
        id: Date.now(),
        done: false,
        content: newTodo.value,
      });
      newTodo.value= ''; 
    }
    function toggleDone(todo) {
      todo.done = !todo.done;
    }
    function removeTodo(index) {
      todos.value.splice(index, 1);
    }
    function MarkAllDone() {
      todos.value.forEach((todo) => todo.done =true);
    }
    function RemoveAll() {
      todos.value = [];
    }

     return {
       newTodo,
       addNewTodo,
       todos,
       toggleDone,
       removeTodo,
       MarkAllDone,
       RemoveAll
        
     };
  }
}
</script>





<style>
.Todo{
  padding-top:30px;
}
.done {
  text-decoration: line-through;
}
.list {
  cursor: pointer;
}
</style>