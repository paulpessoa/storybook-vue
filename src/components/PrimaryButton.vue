<template>
  <button @click="click">{{ text }}</button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    text: String,
    click: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
