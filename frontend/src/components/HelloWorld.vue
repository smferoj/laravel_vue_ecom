<script setup>
 
 import {ref, computed} from 'vue';
 import store from '../../src/store';

 const test  = computed(() => store.state.test);
</script>

<template>
  <p> Hello world {{ test }} </p>
</template>

<style scoped>
 

</style>
