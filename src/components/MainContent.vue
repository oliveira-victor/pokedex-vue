<script setup lang="ts">
// Define interface for the Pokémon data
/* interface DataItem {
    id: number;
    name: string;
} */

// Expect a single DataItem or null
const props = defineProps<{
    data: DataItem | null;
}>();
</script>

<template>
    <main>
        <div class="pokedex-container" v-if="data">
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                    alt="">
            </div>
            <ul class="poke-info">
                <li>
                    Nome
                </li>
                <li>
                    Ordem
                </li>
            </ul>
        </div>
        <div v-else>
            No data available.
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 20px 40px;
}

.pokedex-container {
    background-color: blue;
    display: flex;
    justify-content: space-around;
}

.img-container {
    background-color: red;
}

.poke-info {
    background-color: green;
    list-style: none;
}
</style>
