<script setup lang="ts">
import { ref } from 'vue';


const footerRef = ref();

defineExpose({ footerRef })
</script>

<template>
    <footer id="contacts" ref="footerRef"
        class="w-full bg-[#1C232A] py-10 lg:py-6 grid justify-center items-center text-white text-center transition-all duration-300">
        <!-- content -->
        <p class="text-xs lg:text-sm select-none">contact us</p>
        <h1 class="text-base lg:text-2xl">email address@gmail.com</h1>
    </footer>
</template>
