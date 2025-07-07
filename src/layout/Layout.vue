<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

const router = useRouter();
const currentRoute = useRoute();
const footerComponent = ref();

const scrollToFooter = async () => {
    if (currentRoute.name !== 'Home') {
        await router.push({ name: 'Home' });
        await nextTick();
    }

    const footerEl = footerComponent.value?.footerRef;
    if (!footerEl) return;

    footerEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
</script>

<template>
    <div class="min-h-screen flex flex-col relative">
        <Header @scrollto="scrollToFooter" />
        <main class="flex-1">
            <slot />
        </main>
        <Footer ref="footerComponent" />
    </div>
</template>
