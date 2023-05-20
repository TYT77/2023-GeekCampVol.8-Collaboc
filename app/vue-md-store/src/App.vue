<template>
    <Navigation />
    <router-view />
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import { app } from './firebase'

</script>

<style>
    @import 'bulma/css/bulma.css';
</style>
