<script setup>
const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
];

const destinations = [
    { label: "Northern Province", to: "/destinations/northern-province" },
    { label: "Eastern Province", to: "/destinations/eastern-province" },
    { label: "Southern Province", to: "/destinations/southern-province" },
    { label: "Western Province", to: "/destinations/western-province" },
    { label: "Kigali City", to: "/destinations/kigali-city" },
];
</script>

<template>
    <footer class="mt-12 bg-green-900 px-6 py-10 text-white">
        <div class="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
                <h3 class="mb-3 text-lg font-bold text-yellow-300">Tembera u Rwanda</h3>
                <p class="text-sm leading-6 text-green-100">
                    Discover the beauty of the land of a thousand hills with trusted travel guides,
                    destinations, and services.
                </p>
            </div>

            <div>
                <h3 class="mb-3 text-lg font-bold text-yellow-300">Quick Links</h3>
                <ul class="space-y-2 text-sm">
                    <li v-for="link in quickLinks" :key="link.to">
                        <RouterLink :to="link.to" class="text-green-100 hover:text-yellow-300">
                            {{ link.label }}
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="mb-3 text-lg font-bold text-yellow-300">Destinations</h3>
                <ul class="space-y-2 text-sm">
                    <li v-for="destination in destinations" :key="destination.to">
                        <RouterLink :to="destination.to" class="text-green-100 hover:text-yellow-300">
                            {{ destination.label }}
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="mb-3 text-lg font-bold text-yellow-300">Contact</h3>
                <ul class="space-y-2 text-sm text-green-100">
                    <li>
                        <a href="mailto:ganzaserge3@gmail.com" class="hover:text-yellow-300">
                            ganzaserge3@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+2507828624943" class="hover:text-yellow-300">
                            +250 782 862 494
                        </a>
                    </li>
                    <li>Kagugu, Kigali, Rwanda</li>
                </ul>
            </div>
        </div>

        <div class="mx-auto mt-8 max-w-6xl border-t border-green-700 pt-4 text-center text-sm text-green-100">
            <p>&copy; 2026 Visit Rwanda. All rights reserved.</p>
        </div>
    </footer>
</template>
