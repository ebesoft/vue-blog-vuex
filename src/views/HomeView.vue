<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   
    <h1>Hola Mundo</h1>

    <button @click="goToBlog" class="btn btn-primary">Primary</button>
    <button @click="goToBlog" class="btn btn-secondary">Secondary</button>
    <button @click="goToBlog" class="btn btn-success">Success</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goToBlog() {
        this.$router.push({ name: 'no-entry' })
      }
    }
  }
</script>
