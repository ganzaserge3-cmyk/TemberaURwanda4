<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const destinationNames = {
    "northern-province": "Northern Province",
    "eastern-province": "Eastern Province",
    "southern-province": "Southern Province",
    "western-province": "Western Province",
    "kigali-city": "Kigali City",
};

const destinationName = computed(() => {
    return destinationNames[route.params.slug] || "Rwanda Destination";
});
</script>

<template>
    <section class="min-h-screen bg-white px-6 py-16 text-green-900">
        <div class="mx-auto w-full max-w-7xl">
            <p class="mb-3 text-sm font-semibold uppercase text-yellow-600">Destination</p>
            <h1 class="mb-4 text-4xl font-bold">{{ destinationName }}</h1>
            <p class="max-w-2xl text-lg leading-8 text-gray-700">
                Explore travel highlights, culture, nature, and memorable experiences across
                {{ destinationName }}.
            </p>
        </div>
    </section>
</template>
