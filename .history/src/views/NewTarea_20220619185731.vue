<script setup>
  import {tareasFactory} from '../tareasSetup';
  import router from '../router';
  const {add} = tareasFactory();
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