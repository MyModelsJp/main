<script setup lang="ts">
const events = [
    {
        img: 'https://placehold.co/800?text=Placeholder',
        description: `Let’s keep this simple.
        We’re a Tokyo-based modeling agency that specializes in one thing: Asian talent that delivers—on time, on camera, and on point.

        Our models are handpicked—not just for their looks (though that part’s covered), but for their presence, professionalism, and the way they bring a concept to life. Whether you're shooting a tight-frame beauty campaign or a nationwide TVC, we’ve got the faces and the discipline to make your brand look and feel exactly how you want.

        Print or screen. Commercials or campaigns. We work fast, communicate clearly, and understand the business from both sides of the lens.

        Want to work with models who show up sharp, take direction, and bring results? You’re in the right place.`
    }
];
</script>

<template>
    <div
        class="max-w-screen-2xl px-10 mx-auto min-h-dvh text-center flex flex-col items-center justify-center space-y-5">
        <h1 class="text-6xl">press</h1>
        <p class="justify-center px-14">we cater to a bunch of events,,, insert filler text
        </p>

        <Section class="w-full h-full flex flex-col space-y-6 gap-8 mb-10">
            <template v-for="(i_, index) in Array(3)">
                <div class="flex flex-col md:grid md:grid-cols-5 gap-8">
                    <div class="w-full h-96 col-span-3" :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'">
                        <img :src="events[0].img" alt="placeholder" class="object-cover h-full w-full">
                    </div>
                    <div class="w-full h-full col-span-2" :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'">
                        <p class="text-ellipsis">{{ events[0].description }}</p>
                    </div>
                </div>
            </template>
        </Section>
    </div>
</template>
