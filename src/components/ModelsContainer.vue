<script setup lang="tsx">
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
</script>

<template>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 ">
        <div v-for="(_e, i) in Array(20)" :key="i" class="relative h-screen overflow-hidden group">
            <img :src="`https://picsum.photos/seed/${i}/1200/800`" alt="Random image"
                class="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" />
            <div
                class="relative flex transition-all duration-300 opacity-0 group-hover:opacity-80 p-4 text-white text-xl font-bold bg-black/50 backdrop-blur-sm text-center  rounded h-full items-center justify-center w-full ">
                <h1>{{ i + 1 }} flippty flappity</h1>
            </div>
        </div>
    </div>
</template>
