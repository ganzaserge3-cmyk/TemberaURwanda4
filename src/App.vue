<script setup>
import Navbar from "./components/Navbar.vue"
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue"

//import Home from "./components/Home.vue"
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <div class="flex-1">
      <RouterView />
    </div>
    <Footer/>
  </div>
<!--<Home />-->
</template>
