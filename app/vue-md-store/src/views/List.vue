<template>
    <section class="hero">
        <div class="hero-body">

            <div class="container pt-5">
                <div class="title has-text-centered">
                    ドキュメント一覧
                </div>  

                <div class="field is-grouped mb-5">
                    <p class="control">
                        <button @click="createDoc" class="button is-info">新規作成</button>
                    </p>
                    <p class="control">
                        <button @click="scanDoc" class="button">
                            <span class="material-symbols-outlined">
                            refresh
                            </span>
                        </button>
                    </p>
                </div>

                <div class="field is-grouped  is-grouped-multiline mb-5">
                    <div
                        v-for="doc in docs" 
                        class="card mb-5 mr-5"
                        style="width: 16rem;"
                    >
                        <div class="card">
                            <div class="card-content">
                                <p>
                                    {{ doc.Flag | doc.UID == uid ? doc.Docs.slice(0, doc.Docs.indexOf('\n')) : "cover" }}
                                </p>
                            </div>
                            <footer class="card-footer">
                                <p class="card-footer-item">
                                <span>
                                    {{ doc.Flag ? "公開" : "秘匿" }}
                                </span>
                                </p>
                                <router-link :to="{name:'edit',params:{oid:doc.UID,did:doc.DID}}" class="card-footer-item">
                                <span>
                                    編集
                                </span>
                                </router-link>
                                
                            </footer>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>    
</template>

<script setup>

    import { ref } from 'vue'
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import router from '../router';
    import axios from 'axios'

    const auth = getAuth();
    const uid = ref('')
    const docs = ref([
        /*
        {
            DID: '1',
            UID: '1',
            Docs: '# 1 \n aaa \n aaaaa',
            Flag: true
        },
        {
            DID: '1',
            UID: 'zGRAO0qFimTuqut8I6LNXwoZsJn2',
            Docs: '# 1 \n aaa \n aaaaa',
            Flag: false
        },
        {
            DID: '1',
            UID: 'yukke',
            Docs: '# 1 \n aaa \n aaaaa',
            Flag: true
        },
        {
            DID: '1',
            UID: 'yukke',
            Docs: '# 1 \n aaa \n aaaaa',
            Flag: false
        },
        {
            DID: '1',
            UID: 'yukke',
            Docs: '# 1 \n aaa \n aaaaa',
            Flag: false
        },
        {
            DID: '1',
            UID: 'yukke',
            Docs: '# 1 \n aaa \n aaaaa',
            Flag: false
        },
        */
    ])

    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid.value = user.uid;
            
            // ドキュメント一覧を取得
            // console.log('user.uid', user.uid)
            scanDoc()


        }else{
            router.push('/')
        }
    });

    const createDoc = () => {
        axios.post('https://65odh41fzc.execute-api.ap-northeast-1.amazonaws.com/prod/CreateDocument', {
            //UID: "yukke",
            UID : uid.value
        })
        .then(function (response) {
            //console.log(response)
        })
        .catch(function (error) {
            // console.log(error)
        })
    }

    const scanDoc = () => {
        axios.post('https://65odh41fzc.execute-api.ap-northeast-1.amazonaws.com/prod/ReadDocumentList', {
            //UID: "yukke",
            UID : uid.value
        })
        .then(function (response) {
            //console.log(response)
            docs.value = []
            response.data.Items.forEach((item) => {
                docs.value.push({
                    DID: item.DID,
                    UID: item.UID,
                    Docs: item.Docs,
                    Flag: item.Flag
                })
            })
        })
        .catch(function (error) {
            // console.log(error)
        })
    }

</script>

<style scoped>

</style>
