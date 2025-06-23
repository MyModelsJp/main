<script setup lang="tsx">
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
</script>

<template>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2">
        <div v-for="(e, i) in Array(100)" :key="i" :class="[
            'p-4 h-screen',
            width >= 1024
                ? ((Math.floor(i / 2) % 2 === 0 && i % 2 === 1) || (Math.floor(i / 2) % 2 === 1 && i % 2 === 0))
                    ? 'bg-[#030303] text-white'
                    : 'bg-[#B0B0B0] text-black'
                : i % 2 === 0
                    ? 'bg-[#030303] text-white'
                    : 'bg-[#B0B0B0] text-black'
        ]">
            {{ i + 1 }} flippty flappity
        </div>
    </div>
</template>
