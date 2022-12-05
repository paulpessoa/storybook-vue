<template>
  <div id="app">
    <PrimaryButton text="Clique aqui" :click="funcaoClique"/>
  </div>
</template>

<script>
import PrimaryButton from './components/PrimaryButton.vue'

export default {
  name: 'App',
  components: {
    PrimaryButton
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
