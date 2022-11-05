<template>
  <div class="" id="app">
    <div class="container grid-xs py-2">
      <header class="navbar">
        <section class="navbar-section">
            <router-link to="/" class="btn btn-link">Home</router-link>
            <router-link to="/display" class="btn btn-link">Tarefas</router-link>
            <img class="img-responsive" src="@/assets/task.png" alt="CoffeeTagTodo" />
            <a href="https://my-portfolio-dev-a4a9c.web.app/" class="btn btn-link">Portfolio</a>
            <a href="https://github.com/JoaoPaulo-dev-lab" class="btn btn-link">GitHub</a>
        </section>
      </header>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
  img{
    max-width: 100px; /*Ajustando o tamanho da imagem*/
    margin: 0 auto;
  }
</style>
