<script setup lang="ts">
const events = [
    {
        img: new URL("@/assets/Images/Press/event1.jpg", import.meta.url).href,
        title: "Partner / Organizer to Miss Grand Japan 2022, 2024",
        description: `Miss Grand is a premier pageantry exhibition allowing participants numerous opportunities for participants to strengthen career growth.

        MyModels oversaw placement of advertising contracts and sponsorship endorsements with 3 talent personalities.`
    },
    {
        img: new URL("@/assets/Images/Press/event2.jpg", import.meta.url).href,
        title: "Seoul Fashion Week",
        description: `SFW is a Korean initiative for fashion partners and model outposts. As a marketing partner we are proud to engage local talent with fashion houses.`
    }
];
</script>

<template>
    <div
        class="max-w-screen-2xl px-10 mx-auto min-h-dvh text-center flex flex-col items-center justify-center space-y-5">
        <h1 class="text-6xl">press</h1>
        <p class="justify-center px-14 mb-10">we cater to a bunch of events,,, insert filler text
        </p>
        <Section class="w-full h-full flex flex-col space-y-6 gap-8 mb-10">
            <template v-for="(event, index) in events">
                <div class="flex flex-col md:grid md:grid-cols-5 gap-8 items-center justify-center">
                    <div class="w-full h-96 col-span-3" :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'">
                        <img :src="event.img" :alt="event.title" class="object-cover h-full w-full">
                    </div>
                    <div class="w-full h-full col-span-2 flex flex-col items-center justify-center text-start gap-2"
                        :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'">
                        <p class="whitespace-pre-line text-ellipsis font-bold">{{ event.title }}</p>
                        <p class="whitespace-pre-line text-ellipsis">{{ event.description }}</p>
                    </div>
                </div>
            </template>
        </Section>
    </div>
</template>
