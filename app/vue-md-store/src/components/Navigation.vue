<template>
    <section class="hero is-link black nav-section">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    
                    <!-- スマホで表示されるモノ -->
                    <div class="navbar-brand">
                        <!-- ロゴ -->
                        <router-link class="navbar-item navbar-item-image" to="/"></router-link>

                        <!-- ハンバーガーメニュー -->
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <!-- PCだとそのまま表示されるモノ -->
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <router-link to="/" class="mt-2 mr-5 pl-3 pr-3 button is-outlined is-white navbar-item">
                                <span class="material-symbols-outlined mr-2">
                                    home
                                </span>
                                <span>Home</span>
                            </router-link>
                            <router-link to="/todo" v-if="isLoggedIn" class="mt-2 mr-5 pl-3 pr-3 button is-outlined is-white navbar-item">
                                <span class="material-symbols-outlined mr-2">
                                    checklist
                                </span>
                                <span>Todo</span>
                            </router-link>
                            <router-link to="/list" v-if="isLoggedIn" class="mt-2 mr-5 pl-3 pr-3 button is-outlined is-white navbar-item">
                                <span class="material-symbols-outlined mr-2">
                                    edit_note
                                </span>
                                <span>Note</span>
                            </router-link>
                            <div class="buttons navbar-item">
                                <a @click="signInWithGoogle" v-if="!isLoggedIn" class="button is-primary">    
                                    <strong>Log in</strong>
                                </a>
                                <a @click="handleSignOut" v-if="isLoggedIn" class="button is-light">
                                    <strong>Sign Out</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut , GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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

const signInWithGoogle = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            //console.log(result.user)
            router.push('/todo')
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

.navbar-item-image {
    background: url(/navber.png) no-repeat center center;
    background-size: cover;
    width: 152px
}

.black{
    background-color: black;
}

.nav-section{
    z-index: 100;
    position: fixed;
    width: 100%;
}

</style>
