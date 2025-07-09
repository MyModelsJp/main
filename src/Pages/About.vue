<script setup lang="ts">
const mailtoLink = 'mailto:book@mymodels.jp?subject=Booking%20Inquiry&body=Hi%20My%20Models%2C%0AI%27d%20like%20to%20know%20more.'
</script>

<template>
    <div
        class="max-w-screen-lg px-10 mx-auto min-h-dvh text-center flex flex-col items-center justify-center space-y-5">
        <h1 class="text-4xl lg:text-6xl">about</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 text-start gap-4 space-y-4">
            <section class="col-span-1 lg:col-span-2">
                <p>
                    We are a Tokyo-based agency specializing in pageant and walkway placements.
                </p>
                <br>
                <p>
                    Our models have participated in Miss Grand Japan, Miss Universe Japan, Fashion Week, and TV / Print
                    Ads.
                </p>
                <br>
                <p>
                    Our Minato satellite office allows us access to hundreds of Tokyo based agency partnerships.
                </p>
            </section>
            <section class="col-span-1">
                <p>Japan, 〒105-0001 Tokyo, Minato City</p>
                <p>Toranomon, 1 Chome−21−10 グランスイート虎ノ門708</p>
                <p>T: +81 80 5368 3244</p>
                <p>F: +81 80 5368 3245</p>
                <a :href="mailtoLink">
                    <p class="underline">book@mymodels.jp</p>
                </a>
            </section>
        </div>

    </div>
    <div class="h-40 bg-[#B2B2B2] w-full">
        <!-- Missing Content -->
    </div>
</template>
