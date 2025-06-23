<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

</script>

<template>
    <div class="h-dvh flex flex-col">
        <Header />
        <main class="flex-1">
            <slot />
        </main>
        <Footer />
    </div>
</template>
