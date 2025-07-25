<script setup lang="tsx">
import { ref, onMounted, onBeforeUnmount, type ComponentPublicInstance } from 'vue'
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

const showOverlayIndex = ref<number | null>(null)
const itemRefs = ref<Array<HTMLElement | null>>([])

function setItemRef(el: Element | ComponentPublicInstance | null, index: number) {
    if (el instanceof HTMLElement) {
        itemRefs.value[index] = el
    } else {
        itemRefs.value[index] = null
    }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
    if (window.innerWidth >= 1024) return // only for mobile

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const index = Number(entry.target.getAttribute('data-index'))
                if (entry.isIntersecting) {
                    showOverlayIndex.value = index
                } else if (showOverlayIndex.value === index) {
                    showOverlayIndex.value = null
                }
            })
        },
        {
            threshold: 0.5,
        }
    )

    itemRefs.value.forEach((el) => {
        if (el) observer?.observe(el)
    })
})

onBeforeUnmount(() => {
    observer?.disconnect()
})

</script>


<template>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 ">
        <div v-for="(model, i) in ImageArray" :key="i" :ref="el => setItemRef(el, i)" :data-index="i"
            class="relative h-screen overflow-hidden group">
            <img :src="model.ImageSrc" class="absolute inset-0 object-cover w-full h-full z-0" loading="lazy" />
            <div :class="[
                'relative flex transition-all duration-300 p-4 text-white text-xl font-bold bg-black/50 backdrop-blur-sm text-center rounded h-full items-center justify-center w-full cursor-pointer',
                showOverlayIndex === i ? 'opacity-80' : 'opacity-0',
                'lg:opacity-0 lg:group-hover:opacity-80'
            ]">
                <section class="flex flex-col gap-2">
                    <!-- Model Details -->
                    <h1>Height: {{ model.Height }}</h1>
                    <h1>Bust: {{ model.Bust }}</h1>
                    <h1>Hips: {{ model.Hips }}</h1>
                    <h1>Waist: {{ model.Waist }}</h1>

                    <!-- Socials -->
                    <div class="flex flex-row items-center justify-center">
                        <div class="size-6 lg:size-8">
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)">
                                    </rect>
                                    <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)">
                                    </rect>
                                    <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)">
                                    </rect>
                                    <path
                                        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                                        fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                                        fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                                        fill="white"></path>
                                    <defs>
                                        <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                                            <stop stop-color="#B13589"></stop>
                                            <stop offset="0.79309" stop-color="#C62F94"></stop>
                                            <stop offset="1" stop-color="#8A3AC8"></stop>
                                        </radialGradient>
                                        <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                                            <stop stop-color="#E0E8B7"></stop>
                                            <stop offset="0.444662" stop-color="#FB8A2E"></stop>
                                            <stop offset="0.71474" stop-color="#E2425C"></stop>
                                            <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop>
                                        </radialGradient>
                                        <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                                            <stop offset="0.156701" stop-color="#406ADC"></stop>
                                            <stop offset="0.467799" stop-color="#6A45BE"></stop>
                                            <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop>
                                        </radialGradient>
                                    </defs>
                                </g>
                            </svg>
                        </div>
                        <a :href="model.Social?.link" class="underline underline-offset-3">{{
                            `@${model.Social?.username}` }}</a>
                    </div>

                    <!-- Contact -->
                    <div class="flex flex-row items-center justify-center" @click="scrollToFooter">
                        <div class="size-6 lg:size-8">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="ic-contact-phone-2">
                                        <path class="cls-1"
                                            d="M17.22,20.16H7a2,2,0,0,1-1.87-2.71l1.93-5.14A2,2,0,0,1,8.92,11h6.37a2,2,0,0,1,1.88,1.3l1.92,5.14A2,2,0,0,1,17.22,20.16Z">
                                        </path>
                                        <circle class="cls-2" cx="12.11" cy="15.59" r="2"></circle>
                                        <path class="cls-1"
                                            d="M2.08,5.73V8.11a2,2,0,0,0,2,2H5a2,2,0,0,0,2-2V6.84H7a25.64,25.64,0,0,1,10,0h0V8.11a2,2,0,0,0,2,2h.89a2,2,0,0,0,2-2V5.73a1,1,0,0,0-.81-1h0a46.18,46.18,0,0,0-18.22,0h0A1,1,0,0,0,2.08,5.73Z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h1>Contact Us</h1>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cls-1,
.cls-2 {
    fill: none;
    stroke: #000000;
    stroke-linecap: round;
    stroke-width: 1.5px;
}

.cls-1 {
    stroke-linejoin: round;
}

.cls-2 {
    stroke-linejoin: bevel;
}
</style>
