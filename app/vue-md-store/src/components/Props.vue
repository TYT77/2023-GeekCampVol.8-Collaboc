<template>
  <div>
    <h1>Props</h1>
    <p>hoge1: {{ hoge1 }}</p>
    <p>hoge2: {{ hoge2 }}</p>
  </div>
</template>

<script setup>
  props: ['hoge1', 'hoge2']

</script>