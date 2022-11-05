import { createStore } from 'vuex'

export default createStore({
  state: { // São os dados que temos. Ex: Objetos, Array, etc.
      tarefas: [], loading: false

  },

  getters: {
    // Fazendo com que as tarefas 'concluídas' apareçam na janela de tarefas:
    uncheckends(state) {
      return state.tarefas.filter(tarefa => tarefa.checked === false) // Tarefas não concluídas;
    },

    checkeds(state) {
      return state.tarefas.filter(tarefa => tarefa.checked) // Tarefas concluídas
    }
  },

  mutations: { // Funções sincronas
    addTarefa(state, payload){
      state.tarefas.push(payload)
    },

    setLoading(state, payload){
      state.loading = payload
    },

    toggleTarefa(state, payload){
      const index = state.tarefas.findIndex((item) => item.id === payload.id);
      if (index > -1) {
        const checked = !state.tarefas[index].checked;
        state.tarefas[index].checked = checked;
      }
    },

    removeTarefa(state, payload){
      const index = state.tarefas.findIndex((item) => item.id === payload.id);
      if (index > -1) {
        state.tarefas.splice(index, 1);
      }

    },
    // Concluir todas as tarefas
    toggleLista(state, tarefaId){
      const tarefas2 = state.tarefas.map(i => {
        return tarefaId.includes(i.id) ? {...i, checked: !i.checked}: i
      })
      state.tarefas = tarefas2
    },
    // Remover todas as tarefas
    removeLista(state, tarefaId){
      const tarefas3 = state.tarefas.filter(item => !tarefaId.includes(item.id))
      state.tarefas = tarefas3
    }

  },
  actions: { // Funções assincronas (podem ser promises e etc)
    addTarefa( {commit}, tarefa) {
      
      commit('setLoading', true)
      return new Promise (resolve => {
        setTimeout(() => {
          tarefa.id = Date.now() // Pegando os dados
          commit('addTarefa', tarefa) // PeGANDO O método 'addTarefa'
          commit('setLoading', false)
          
          resolve(tarefa)

        }, 500)
      })
    },

    toggleTarefa({commit}, tarefa){
      commit('toggleTarefa', tarefa)
    },

    removeTarefa({commit}, tarefa){
      commit('removeTarefa', tarefa)
    },
    // Botão de concluir todas as tarefas:
    checkTodas({ commit, state }){
      const uncheckedsId = state.tarefas.filter( i => !i.checked ).map(i => i.id);
      commit('toggleLista', uncheckedsId)
    },
    //Desmarcar todas:
    uncheckTodas({ commit, state }){
      const checkeds = state.tarefas.filter( i => i.checked ).map(i => i.id);
      commit('toggleLista', checkeds)
    },
    // Remover todas:
    removeTodas({ commit, state }){
      const checkeds = state.tarefas.filter( i => i.checked ).map(i => i.id);
      commit('removeLista', checkeds)
    },
  },
  modules: {
  },
})