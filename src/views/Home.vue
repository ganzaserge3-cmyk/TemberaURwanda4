<template>
  <main>
    <section
      class="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6 text-white"
      :style="{ backgroundImage: `url(${lakeKivuImage})` }"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative w-full max-w-6xl text-center">
        <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-green-300">
          Visit Rwanda
        </p>
        <h1 class="mb-4 text-4xl font-bold md:text-6xl">Welcome to Rwanda</h1>
        <p class="mb-8 text-lg leading-8 text-gray-100 md:text-xl">
          Discover the land of a thousand hills, where green landscapes, warm culture,
          and unforgettable adventures come together.
        </p>

        <div class="grid gap-4 text-left md:grid-cols-3">
          <div class="rounded-lg bg-white/15 p-4 backdrop-blur">
            <h2 class="mb-2 text-lg font-semibold text-green-200">Nature</h2>
            <p class="text-sm leading-6 text-gray-100">
              Explore mountains, lakes, national parks, and peaceful countryside views.
            </p>
          </div>
          <div class="rounded-lg bg-white/15 p-4 backdrop-blur">
            <h2 class="mb-2 text-lg font-semibold text-green-200">Culture</h2>
            <p class="text-sm leading-6 text-gray-100">
              Meet welcoming communities and enjoy Rwanda's music, art, food, and history.
            </p>
          </div>
          <div class="rounded-lg bg-white/15 p-4 backdrop-blur">
            <h2 class="mb-2 text-lg font-semibold text-green-200">Adventure</h2>
            <p class="text-sm leading-6 text-gray-100">
              Plan memorable trips from Kigali to scenic provinces across the country.
            </p>
          </div>
        </div>
      </div>

      <p class="absolute bottom-3 right-4 text-xs text-white/70">
        Photo: Lake Kivu by Ivan Mucyo, CC BY-SA 4.0
      </p>
    </section>

    <section class="bg-white px-6 py-16 text-green-900">
      <div class="mx-auto w-full max-w-7xl">
        <p class="mb-3 text-sm font-semibold uppercase text-yellow-600">Explore more</p>
        <h2 class="mb-4 text-3xl font-bold">A small guide to Rwanda</h2>
        <p class="max-w-3xl leading-8 text-gray-700">
          Rwanda is a beautiful country for travelers who love clean cities, green
          hills, wildlife, culture, and calm places to relax. From Kigali to the
          provinces, every place has something special to discover.
        </p>

        <div class="mt-8 grid gap-5 md:grid-cols-2">
          <div class="rounded-lg border border-green-100 p-5">
            <h3 class="mb-2 text-xl font-semibold">Popular places</h3>
            <p class="leading-7 text-gray-700">
              Visit Kigali, Lake Kivu, Volcanoes National Park, Nyungwe Forest, and
              Akagera National Park for unforgettable experiences.
            </p>
          </div>
          <div class="rounded-lg border border-green-100 p-5">
            <h3 class="mb-2 text-xl font-semibold">Why visitors love it</h3>
            <p class="leading-7 text-gray-700">
              Rwanda is known for its safety, cleanliness, friendly people, beautiful
              views, and strong culture that welcomes every visitor.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-green-50 px-6 py-16 text-green-900">
      <div class="mx-auto w-full max-w-7xl">
        <p class="mb-3 text-sm font-semibold uppercase text-yellow-600">Travel moments</p>
        <h2 class="mb-8 text-3xl font-bold">Things you can enjoy</h2>

        <div class="grid gap-6 md:grid-cols-3">
          <div>
            <h3 class="mb-2 text-xl font-semibold">City walks</h3>
            <p class="leading-7 text-gray-700">
              Enjoy Kigali's clean streets, local markets, museums, cafes, and peaceful
              neighborhoods.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-semibold">Lake trips</h3>
            <p class="leading-7 text-gray-700">
              Spend calm days near Lake Kivu with fresh air, boat rides, and beautiful
              sunset views.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-semibold">Wildlife tours</h3>
            <p class="leading-7 text-gray-700">
              Discover Rwanda's parks and see animals, forests, birds, and natural beauty
              up close.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import lakeKivuImage from '../assets/lake-kivu-rwanda.jpg'
</script>
