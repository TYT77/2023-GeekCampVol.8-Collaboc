<template>
    <Navigation />
    <router-view />
    <Footer />
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { app } from './firebase/index.js'

</script>

<style>
    @import 'bulma/css/bulma.css';
</style>
