<template>
    
    <section class="hero is-fullheight">
        <hr class="pb-3">   
        <div class=" tile is-ancestor is-fullheight ">
            <div class="tile is-parent">
                <textarea v-model="markdown" autocorrect="off" autocapitalize="off" spellcheck="true" tabindex="0" class="tile is-child notification" ></textarea>
                <div class="tile is-child notification content " v-html="html"> </div>
                <div class="tile is-child notification content hidden" v-html="html"> </div>
            </div>
        </div>
    </section>

</template>

<script setup>

    import { ref, watch } from 'vue';
    import MarkdownIt from 'markdown-it';
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import router from '../router';
    import axios from 'axios'

    const auth = getAuth();
    const uid = ref('')

    const markdown = ref('');
    const html = ref('');
    
    const convertMarkdownToHtml = () => {
        const md = new MarkdownIt();
        html.value = md.render(markdown.value);
    };

    watch(markdown, convertMarkdownToHtml);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid.value = user.uid;
            
            // ドキュメント内容を取得
            // console.log('user.uid', user.uid)

            getDoc()


        }else{
            router.push('/')
        }
    });

    const getDoc = async () => {
        
        axios.post('https://65odh41fzc.execute-api.ap-northeast-1.amazonaws.com/prod/ReadDocument', {
            //UID: uid.value,
            UID: 'yukke',
            //DID: router.currentRoute.value.params.did
            DID: '3e17099f-8144-4c41-be6c-ae265673a2d0'
        })
        .then(function (response) {
            //console.log(response)
            //console.log('res', response.data.Items[0].Docs)
            markdown.value = response.data.Items[0].Docs
        })
        .catch(function (error) {
            // console.log(error)
        })

    }

</script>

<style scoped>
    @import '/css/style.scss';

</style>
