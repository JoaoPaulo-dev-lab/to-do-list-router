<template>
  <ul class="step">
    <li class="step-item">
      <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
    </li>
    <li class="step-item active">
      <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
    </li>
    <li class="step-item">
      <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
    </li>
  </ul>
  <div class="container-board">
    <!--Tarefas a cumprir-->
    <div class="columns">
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Tarefas a cumprir</div>
          </div>
          <div class="panel-nav">
            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body">
            <!-- contents -->
            <TarefaTeste
              v-for="tarefa in uncheckends"
              :tarefa="tarefa"
              @toggle="toggleTarefa"
              @remove="removeTarefa"
              :key="tarefa.id"
            />
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
            <button @click="checkTodas" v-if="uncheckends.length > 0" class="btn btn-success">Concluir Todas</button>
          </div>
        </div>
      </div>
      <!--Tarefas Concluídas-->
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Concluídas</div>
          </div>
          <div class="panel-nav">
            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="panel-body">
            <!-- contents -->
            <TarefaTeste
              v-for="tarefa in checkeds"
              :tarefa="tarefa"
              @toggle="toggleTarefa"
              @remove="removeTarefa"
              :key="tarefa.id"
            />
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
            <button @click="uncheckTodas" v-if="checkeds.length > 0" class="btn btn-success">Desmarcar Todas</button>
            <button @click="removeTodas" v-if="checkeds.length > 0" class="btn btn-error">Remover Todas</button>
          </div>
        </div>
      </div>
      <!--Observações-->
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Observações</div>
          </div>
          <div class="panel-nav">
            <!-- navigation components: tabs, breadcrumbs or pagination -->
          </div>
          <div class="input-group">
            <input
              type="text"
              class="form-input"
              placeholder=" Adicionar lembrete"
            />
            <button class="btn btn-success input-group-btn">
              <i class="icon icon-arrow-right"></i> Adicionar
            </button>
          </div>
          <div class="panel-body">
            <!-- contents -->
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TarefaTeste from "@/components/TarefaTeste.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DisplayTest",

  components: { TarefaTeste },

  computed: {
    ...mapGetters(["uncheckends", "checkeds"]),
  },

  methods: {
    ...mapActions(["removeTarefa", "toggleTarefa", "checkTodas", "uncheckTodas", "removeTodas"]), // Chamando as funções do Vuex
  },
};
</script>

<style scoped>
.container-board {
  height: 100vh;
  padding: 15px;
  margin: 0px 100px 0px 100px;
}

.columns {
  height: 100%;
}
.columns .column .panel {
  height: 100%;
  border: 0px;
  box-shadow: 0 0.25rem 1rem rgba(63, 127, 191, 1);
}
.panel-title {
  font-weight: bold;
  text-align: center;
  font-size: 17px;
}
.input-group {
  padding: 0px 10px 0px 10px;
}

</style>