<template>
  <div id="app">
    <DefaultButton text="Clique aqui" :click="funcaoClique" disabled/>
    <DefaultButton text="desabilitado" :click="funcaoClique" :disabled="false"/>
  </div>
</template>

<script>
import DefaultButton from './components/DefaultButton.vue'

export default {
  name: 'App',
  components: {
    DefaultButton
  },
  methods: {
    funcaoClique() {
      alert('Clicou no botão')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
