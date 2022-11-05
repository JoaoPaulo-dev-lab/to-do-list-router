<template>
  <div class="tile tile-centured" :class="{ checked: tarefa.checked }">
    <div class="tile-content">
      <div class="tile-subtitle">{{ tarefa.description }}</div>
    </div>

    <div>
      <button @click="$emit('toggle', tarefa)" class="btn btn-primary">
        <span v-if="tarefa.checked"> Desmarcar </span>
        <span v-else> Concluido </span>
      </button>

      <button @click="$emit('remove', tarefa)" class="btn btn-error">
        Remover
      </button>
    </div>
  </div>
</template>


<script>

export default {
  name: "TarefaTeste",
  props: {
    tarefa: { type: Object, required: true },
  },
};
</script>


<style scoped>
.checked {
  text-decoration: line-through;
  color: lightslategray;
}

.tile{
  margin-top: 1rem;
  padding: 20px;
  box-shadow: 0 0.25rem 1rem rgba(63, 127, 191, 1);
}
</style>