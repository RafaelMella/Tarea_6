<script setup>
  import {tareaFactory} from '../todosSetup';
  const {tareaIncompleted, tareaCompleted, toggle, deleteTarea} = tareaFactory();
</script>

<template>
  <h3>LISTA DE TAREAS</h3>
  <p v-if="tareasIncompleted.length === 0">NingunaTarea</p>
  <ul id="incomplete-tasks">
    <li v-for="tarea in tareaIncompleted" :key="tarea.id" @click="toggle(tarea.id)">
      <input type="checkbox">
      <label>{{ todo.name }}</label>
      <input type="text">
      <button class="delete" @click="deleteTarea(todo.id)">Borrar</button>
    </li>
  </ul>
  <h3>COMPLEATADAS</h3>
  <ul id="completed-tasks">
    <li v-for="tarea in tareaCompleted" :key="tarea.id" @click="toggle(tarea.id)">
      <input type="checkbox" checked @click="toggle(tarea.id)">
      <label>{{ tarea.name }}</label>
      <input type="text">
      <button class="delete" @click="deleteTodo(tarea.id)">Borrar</button>
    </li>
  </ul>
</template>
