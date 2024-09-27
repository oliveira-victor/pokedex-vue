<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <Header />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1920px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.container {
  max-width: 1024px;
  width: 100%;
  border-radius: 30px;
  background-color: #fff;
}
</style>
