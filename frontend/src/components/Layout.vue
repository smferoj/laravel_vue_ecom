<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-blue-500">{{ props.title }}</h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style>
/* Add any custom styles here */
</style>
