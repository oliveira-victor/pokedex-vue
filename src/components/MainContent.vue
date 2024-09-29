<script setup lang="ts">
const props = defineProps<{
    data: DataItem | null;
}>();
</script>

<template>
    <main>
        <div class="pokedex-container" v-if="data">
            <div class="img-container">
                <img :src="data.sprites.other.dream_world.front_default"
                    :alt="data.name">
            </div>
            <ul class="poke-info">
                <li>
                    <span class="list-title">Name: </span><br>
                    <span class="list-info">{{ data.name }}</span>
                </li>
                <li>
                    <span class="list-title">Order: </span><br>
                    <span class="list-info">{{ data.order }}</span>
                </li>
                <li>
                    <span class="list-title">Type: </span>
                    <ul class="poke-info">
                        <li class="list-types" v-for="(item,index) in data.types" :key="index">{{ item.type.name }}</li>
                    </ul>
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
    display: flex;
    justify-content: center;
    gap: 80px;
}

.img-container {
    height: 90%;
}

/* .img-container img {
} */

.poke-info {
    font-size: 22px;
    line-height: 1.6;
}

.list-types {
    margin-left: 20%;
}

.list-title {
    font-weight: bold;
    font-size: 16px;
}

.list-info {
    text-transform: capitalize;
    margin-left: 20%;
}
</style>
