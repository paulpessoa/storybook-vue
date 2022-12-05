<template>
  <button :disabled="disabled" @click="click">{{ text }} </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    text: String,
    click: Function,
    disabled:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
