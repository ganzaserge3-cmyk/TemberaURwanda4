<script setup>
import Navbar from "./components/Navbar.vue"
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue"

//import Home from "./components/Home.vue"
</script>

<template>
    <Navbar />
    <RouterView/>
    <Footer/>
<!--<Home />-->
</template>