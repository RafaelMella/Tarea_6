<script setup>
  import {todosFactory} from '../todosSetup';
  import router from '../router';
  const {add} = todosFactory();
  const addAndNavigate = (name) => {
    add(name);
    router.push('/');
  };
</script>

<template>
  <div class="container">
      <label for="new-task">Nueva Tarea</label>
      <input id="new-task" type="text" v-model="name">
      <button type="add" @click="addAndNavigate(name)">Add</button>
  </div>
</template>