<script setup lang="ts">
import { ref } from 'vue';


const footerRef = ref();

defineExpose({ footerRef });


const mailtoLink = 'mailto:book@mymodels.jp?subject=Booking%20Inquiry&body=Hi%20My%20Models%2C%0AI%27d%20like%20to%20know%20more.'
</script>

<template>
    <footer id="contacts" ref="footerRef"
        class="w-full bg-[#1C232A] py-10 lg:py-6 grid justify-center items-center text-white text-center transition-all duration-300">
        <!-- content -->
        <p class="text-xs lg:text-sm select-none">contact us</p>
        <a :href="mailtoLink">
            <p class="text-base lg:text-2xl">book@mymodels.jp</p>
        </a>
    </footer>
</template>
