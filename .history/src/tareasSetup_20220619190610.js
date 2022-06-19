import { computed, ref } from 'vue'

const tareas = ref([]);
const tareasIncompleted = computed(() => tareas.value.filter(t => !t.completed));
const tareasCompleted = computed(() => tareas.value.filter(t => t.completed));
const length = computed(() => tarea.value.length);

const toggle = (id) => {
  const tarea = tareas.value.find(t => t.id === id);
  if (tarea?.completed !== undefined) {
    tarea.completed = !tarea.completed;
  }
};

const deleteTarea = (id) => {
  tareas.value = tareas.value.filter(t => t.id !== id);
};

const add = (name) => {
  tareas.value.push({id: length.value + 1, name, completed: false});
};

const update = (tareasPayload) => {
  tareas.value = tareasPayload;
};

const tareasFactory = () => ({tareasIncompleted, tareasCompleted, toggle, deleteTarea, add, update});

export {tareasFactory};