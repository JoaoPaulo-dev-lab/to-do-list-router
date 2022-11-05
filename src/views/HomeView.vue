<template>
  <div id="app">
    <div class="container grid-xs py-2">

      <form @submit.prevent="incluirTarefa(tarefa)">
        <div class="input-group">
          <input
            type="text"
            v-model="tarefa.description"
            class="form-input"
            placeholder=" Adicionar uma Tarefa"
          />
          <button class="btn btn-success input-group-btn" :class="{ loading }">
            <i class="icon icon-arrow-right"></i> Adicionar
          </button>
        </div>

        <ul class="step">
          <li class="step-item active">
            <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>
          </li>
        </ul>
      </form>

      <div class="tarela-list">
        <tarefa-teste
          v-for="t in tarefas"
          :key="t.id"
          @toggle="toggleTarefa"
          @remove="removeTarefa"
          :tarefa="t"
        ></tarefa-teste>
      </div>
    </div>
  </div>
</template>

<script>
import TarefaTeste from "@/components/TarefaTeste.vue";
import { mapActions, mapState } from 'vuex';

export default {
  name: "HomeView",
  components: {
    TarefaTeste,
  },
  data() {
    return { tarefa: { checked: false } };
  },
  computed: {

    ...mapState(['tarefas', 'loading']) // Mapeando os states ('tarefas' e 'loading')
  
  },
  methods: {

    ...mapActions(['addTarefa', 'toggleTarefa', 'removeTarefa']),
      
      async incluirTarefa(tarefa) {
      await this.addTarefa(tarefa);
      this.tarefa = {checked: false};
    },
  },
};
</script>

<style scoped>
img {
  max-width: 150px;
  margin: 0 auto;
}
.tarela-list {
  padding-top: 2rem;
}
</style>