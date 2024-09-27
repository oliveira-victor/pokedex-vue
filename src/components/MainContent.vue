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
                <img :src="data.sprites.other.dream_world.front_default"
                    alt="">
            </div>
            <ul class="poke-info">
                <li>
                    <span class="list-title">Name: </span>
                    <span class="list-info">{{ data.name }}</span>
                </li>
                <li>
                    <span class="list-title">Order: </span>
                    <span class="list-info">{{ data.order }}</span>
                </li>
                <li>
                    <span class="list-title">Type: </span>
                    <span class="list-info">{{ data.types[0].type.name }}</span>
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
    /* height: 600px; */
}

.pokedex-container {
    display: flex;
    justify-content: center;
    gap: 40px;
}

.img-container {
    height: 90%;
}

.img-container img {
    /* min-height: 600px; */
    width: 400px;
    object-fit: cover;
}

.poke-info {
    /* background-color: #d3d3d3;
    padding: 12px;
    border-radius: 4px; */
    list-style: none;
    font-size: 26px;
    line-height: 1.8;
}

.list-title {
    font-weight: bold;
}

.list-info {
    text-transform: capitalize;
}
</style>
