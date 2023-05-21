<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <img src="/image.png" alt="メインイメージ" class="mb-5">
                    <h1 class="title">
                        CollaB(D)oc
                    </h1>
                    <h2 class="subtitle pt-4">
                        ドキュメントの編集を<br>チームでコラボレーションする
                    </h2>
                    <p>                        
                        CollaB(D)ocは、<br>
                        複数人でドキュメントを編集するためのMarkdownエディターです。
                    </p>
                    
                    <a @click="signInWithGoogle" v-if="!isLoggedIn" class="is-grouped button is-primary box mt-6">    
                        <strong>Sign in with Google</strong>
                    </a>
                    <a @click="handleSignOut" v-if="isLoggedIn" class="is-grouped button is-light box mt-6">
                        <strong>Sign Out</strong>
                    </a>
                </div>
            </div>
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


</script>

<style scoped>
</style>

