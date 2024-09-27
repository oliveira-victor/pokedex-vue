<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref<string>('');

const emit = defineEmits(['fetch-data']);

const submitForm = () => {
    emit('fetch-data', searchQuery.value);
};
</script>

<template>
    <header class="header">
        <h1>Pokedex</h1>
        <form class="form" @submit.prevent="submitForm">
            <input v-model="searchQuery" type="text" placeholder="Pesquisar" required />
            <button class="submit-btn" type="submit">
                <img class="search-icon" src="../assets/pokeball.webp" alt="Pokeball icon" />
            </button>
        </form>
    </header>
</template>

<style scoped>
.header {
    background-color: #ac1c1c;
    background-image: url(../assets/waves.webp);
    background-size: 120px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 40px;
    border-radius: 30px 30px 0 0;
}

.form {
    max-width: 240px;
    width: 100%;
    position: relative;
}

input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 16px;
    outline: none;
}

.submit-btn {
    position: absolute;
    height: 40px;
    top: 0;
    right: 0;
    cursor: pointer;
    border: none;
    background: none;
}

.search-icon {
    height: 40px;
    transition: all 0.2s ease;
}

.search-icon:hover {
    transform: scale(1.07) rotate(15deg);
}
</style>
