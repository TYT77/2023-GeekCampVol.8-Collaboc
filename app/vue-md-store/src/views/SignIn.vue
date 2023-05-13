<template>
    <h1>Create an Account</h1>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>
  
<script setup>
import { ref } from 'vue'
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { useRouter } from 'vue-router';
const router = useRouter();

const signInWithGoogle = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user)
            router.push('/feed')
        }).catch((error) => {
            console.log(error)
        })

}

</script>