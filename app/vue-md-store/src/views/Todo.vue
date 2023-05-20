<template>
    <div class="container">
        
        <div class="title has-text-centered">
            Todo
        </div>  

        <div class="field is-grouped mb-5">
            <p class="control is-expanded">
                <input v-model="newTodoTitle" class="input" type="text" placeholder="Add a todo">
            </p>
            <p class="control">
                <button :disabled="!newTodoTitle" @click="addTodo" class="button is-info">Add</button>
            </p>
        </div>

        <div
            v-for="todo in todos" 
            class="card mb-5"
            :class="{'has-background-success-light': todo.completed}"
        >
            <div class="card-content">
                <div class="content">

                    <div class="columns is-mobile is-vcentered">
                        <div 
                            class="column"
                            :class="{'has-text-success line-through ': todo.completed}"
                        >
                            {{ todo.title }}
                        </div>
                        <div class="column is-5 has-text-right">
                            <button 
                                @click="completeTodo(todo.id)"
                                class="button"
                                :class="todo.completed ? 'is-success' : 'is-light'"
                            >
                                &check;
                            </button>
                            <button @click="deleteTodo(todo.id)" class="button is-danger ml-2">
                                &cross;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
</template>

<script setup>

    import { ref } from 'vue'
    import { 
        collection, onSnapshot,
        doc, addDoc, deleteDoc, updateDoc,
        query, orderBy 
    } from "firebase/firestore";
    import { db } from '../firebase'
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import router from '../router';

    const auth = getAuth();
    const uid = ref('')
    const newTodoTitle = ref('')
    const todos = ref([])

    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid.value = user.uid;
            
            onSnapshot(query(collection(db, uid.value), orderBy("date", "desc")), (querySnapshot) => {
                const fbTodos = []
                querySnapshot.forEach((doc) => {
                    fbTodos.push({
                        id: doc.id,
                        title: doc.data().title,
                        completed: doc.data().completed,
                        date : doc.data().date
                    })
                });
                todos.value = fbTodos
            })
        }else{
            router.push('/')
        }
    });

    const addTodo = () => {

        addDoc(collection(db, uid.value), {
            title: newTodoTitle.value,
            completed: false,
            date : Date.now()
        });

        newTodoTitle.value = ''
    }

    const deleteTodo = id => {

        deleteDoc(doc(collection(db, uid.value), id));
        // todos.value = todos.value.filter(todo => todo.id !== id)
    
    }

    const completeTodo = id => {
        
        const index = todos.value.findIndex(todo => todo.id === id)
        updateDoc(doc(collection(db, uid.value), id), {
            completed: !todos.value[index].completed
        });

        /*
        todos.value = todos.value.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        */

    }

</script>

<style scoped>
    
    .container{
        max-width: 400px;

    }

    .line-through{
        text-decoration: line-through;
    }

</style>