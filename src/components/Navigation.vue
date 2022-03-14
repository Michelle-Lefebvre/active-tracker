<template>
  <header class="text-white bg-at-light-green">
    <nav class="container flex flex-col items-center gap-4 px-4 py-5 sm:flex-row">
      <div class="flex items-center gap-x-4">
        <img class="w-14" src="../assets/images/dumbbell-light.png" alt />
        <h1 class="text-lg">Active Tracker</h1>
      </div>
      <ul class="flex justify-end flex-1 gap-x-10">
        <router-link class="cursor-pointer" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="cursor-pointer" :to="{ name: 'Home' }">Create</router-link>
        <router-link class="cursor-pointer" :to="{ name: 'Home' }">Login</router-link>
        <li class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    // Get user from store

    // Setup ref to router

    // Logout function

    return {};
  },
};
</script>
