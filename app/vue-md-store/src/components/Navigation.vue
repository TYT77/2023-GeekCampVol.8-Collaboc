<template>
    <nav>
        <router-link to="/">Home | </router-link>
        <router-link to="/feed" v-if="isLoggedIn">Feed | </router-link>
        <router-link to="/sign-in" v-else="isLoggedIn">Login</router-link>
        <a @click="handleSignOut" v-if="isLoggedIn">Sign Out</a>
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

</script>
