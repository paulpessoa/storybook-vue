<template>
  <button :disabled="disabled" @click="clicked">{{ text }} </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    text: String,
    click: Function,
    backgroundColor: String,
    disabled:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicked() {
      this.$emit('clickemit');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
