<script setup lang="tsx">
import { ref, onMounted } from 'vue';
const modelImages = ref<{ img: string }[]>([]);

onMounted(async () => {
    const firstImage = await import('../assets/Images/image.svg');

    const numberedImages = await Promise.all(
        Array.from({ length: 7 }, async (_, i) => {
            const imageIndex = i + 2;
            const module = await import(`../assets/Images/image${imageIndex}.svg`);
            return { img: module.default };
        })
    );

    modelImages.value = [{ img: firstImage.default }, ...numberedImages];
});

const scrollToFooter = () => {
    const footer = document.querySelector('footer'); // or use a specific ref/id/class
    if (footer) {
        footer.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

</script>


<template>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 ">
        <div v-for="(model, i) in modelImages" :key="i" class="relative h-screen overflow-hidden group">
            <img :src="model.img" class="absolute inset-0 object-cover w-full h-full z-0" loading="lazy" />
            <div class="relative flex transition-all duration-300 opacity-0 group-hover:opacity-80 p-4 text-white text-xl font-bold bg-black/50 backdrop-blur-sm text-center  rounded h-full items-center justify-center w-full cursor-pointer"
                @click="scrollToFooter">
                <h1>Contact us</h1>
            </div>
        </div>
    </div>
</template>
