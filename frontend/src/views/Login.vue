<script setup>
import Layout from '../components/Layout.vue';
</script>

<template>
  <Layout title="Login Page">
    <form @submit.prevent="">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write your email" />
        <!-- <small class="text-red-500" v-if="errors.email">{{ errors.email[0] }}</small> -->
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        <!-- <small class="text-red-400 text-sm" v-if="errors.password">{{ errors.password[0] }}</small> -->
      </div>

      <div class="flex items-center justify-between">
        <button @click="handleLogin" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </Layout>
</template>

<style>
/* Add any custom styles here */
</style>
