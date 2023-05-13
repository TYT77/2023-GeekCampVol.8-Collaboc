<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>

  <button class="card" @click="count++">
    count is {{ count }}
  </button>    
  
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 20px;
  margin: 20px;
}

</style>
