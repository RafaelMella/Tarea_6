<script setup>
  import {tareaFactory} from '../tareaSetup';
  import router from '../router';
  const {add} = tareaFactory();
  const addAndNavigate = (name) => {
    add(name);
    router.push('/');
  };
</script>

<template>
  <div class="container">
      <label for="new-task">Nueva Tarea</label>
      <input id="new-task" type="text" v-model="name">
      <button type="add" @click="addAndNavigate(name)">Agregar</button>
  </div>
</template>