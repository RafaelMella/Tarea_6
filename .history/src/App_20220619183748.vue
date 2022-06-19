<script setup>
  import { ref } from 'vue';
  import {tareaFactory} from './tareaSetup';
  import { RouterLink, RouterView } from 'vue-router'
  import todoService from './services/tareaService';
  const {update} = tareaFactory();
  const isLoading = ref(true);
  async function prefetch() {
    update(await tareaService.getTarea());
    isLoading.value = false;
  }
  prefetch();
</script>

<template>
  <div class="container">
    <h2 v-if="isLoading">Cargando Tareas...</h2>
    <template v-if="!isLoading">
      <ul>
        <RouterLink to="/"><li>LISTA DE TAREAS</li></RouterLink>
        <RouterLink to="/new"><li>NUEVA TAREA</li></RouterLink>
      </ul>
      <RouterView />
    </template>
  </div>
</template>

<style>
@import './assets/base.css';
</style>