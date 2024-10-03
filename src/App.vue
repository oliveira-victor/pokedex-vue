<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';

const pokemon = ref<DataItem | null>(null); // Hold a single DataItem, not an array

const fetchData = async (query: string): Promise<void> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    pokemon.value = data; // Map response to DataItem
  } catch (error) {
    console.error('Error fetching data:', error);
    pokemon.value = null; // Reset in case of error
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <Header @fetch-data="fetchData" />
      <MainContent :data="pokemon" />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1920px;
  width: 100%;
  margin: 20px auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.container {
  max-width: 840px;
  width: 100%;
  border-radius: 30px;
  background-color: #fff;
}
</style>
