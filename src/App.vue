<script setup lang="ts">
import Layout from './layout/Layout.vue';
import { RouterView } from 'vue-router';

</script>

<template>
    <Layout>
        <main>
            <RouterView />
        </main>
    </Layout>
</template>
