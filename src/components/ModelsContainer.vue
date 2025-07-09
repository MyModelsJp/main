<script setup lang="tsx">
import { onMounted } from 'vue';
import { ImageArray } from '../data/model-array'

const scrollToFooter = () => {
    const footer = document.querySelector('footer'); // or use a specific ref/id/class
    if (footer) {
        footer.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

onMounted(async () => {
    ImageArray.forEach(img => {
        const image = new Image()
        image.src = img.ImageSrc
    })
});

</script>


<template>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 ">
        <div v-for="(model, i) in ImageArray" :key="i" class="relative h-screen overflow-hidden group">
            <img :src="model.ImageSrc" class="absolute inset-0 object-cover w-full h-full z-0" loading="lazy" />
            <div class="relative flex transition-all duration-300 opacity-0 group-hover:opacity-80 p-4 text-white text-xl font-bold bg-black/50 backdrop-blur-sm text-center  rounded h-full items-center justify-center w-full cursor-pointer"
                @click="scrollToFooter">
                <section>
                    <h1>Height: {{ model.Height }}</h1>
                    <h1>Bust: {{ model.Bust }}</h1>
                    <h1>Hips: {{ model.Hips }}</h1>
                    <h1>Waist: {{ model.Waist }}</h1>
                </section>
            </div>
        </div>
    </div>
</template>
