<template>
    <Navigation />
    <section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <router-view />      
                </div>
            </div>
        </div>
    </section>
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
