<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        
        <!-- スマホで表示されるモノ -->
        <div class="navbar-brand">
            
            <!-- ロゴ -->
            <router-link class="navbar-item" to="/">
                <img src="/vite.svg" width="112" height="28">
            </router-link>
            
            <!-- ハンバーガーメニュー -->
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>

        </div>

        <!-- PCだとそのまま表示されるモノ -->
        <div id="navbarBasicExample" class="navbar-menu">
            
            <div class="navbar-start">

                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/todo" v-if="isLoggedIn" class="navbar-item">Todo</router-link>

            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/sign-in" v-if="!isLoggedIn" class="button is-primary">    
                            <strong>Log in</strong>
                        </router-link>
                        <a @click="handleSignOut" v-if="isLoggedIn" class="button is-light">
                            <strong>Sign Out</strong>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </nav>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '../router';

const isLoggedIn = ref(false)

let auth
onMounted(() => {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user
    })
})

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/')
        isLoggedIn.value = false
    }).catch((error) => {
        console.log(error)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });
});

</script>

<style scoped>
    @import 'bulma/css/bulma.css'
</style>
