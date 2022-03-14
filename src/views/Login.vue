<template>
  <div class="max-w-screen-sm px-4 py-10 mx-auto">
    <!-- Error Haandling -->
    <div v-if="errorMsg" class="p-4 mb-10 rounded-md shadow-lg bg-light-grey">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>
    <!-- Login form -->
    <form @submit.prevent="login" class="flex flex-col p-8 rounded-md shadow-lg bg-light-grey">
      <h1 class="mb-4 text-3xl text-at-light-green">Login</h1>
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm text-at-light-green">Email</label>
        <input
          type="email"
          required
          class="p-2 text-gray-500"
          focus:outline-none
          id="email"
          v-model="email"
        />
      </div>

      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm text-at-light-green">Password</label>
        <input
          type="password"
          required
          class="p-2 text-gray-500"
          focus:outline-none
          id="password"
          v-model="password"
        />
      </div>

      <button
        class="self-start px-6 py-2 mt-6 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"
      >Register</button>
      <router-link class="mt-6 text-sm text-center" :to="{ name: 'Register' }">
        Don't have an account?
        <span class="text-at-light-green">Register</span>
      </router-link>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase/init';
import { useRouter } from 'vue-router';

export default {
  name: "login",
  setup() {
    // Create data / vars
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const errorMsg = ref(null);


    // Login function
    const login = async () => {
      try {
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        })
        if (error) throw error
        router.push({ name: 'Home' })
      } catch (error) {
        errorMsg.value = `Error: ${error.message}`
        setTimeout(() => {
          errorMsg.value = null
        }, 5000)
      }
    }
    return { email, password, errorMsg, login };
  },
};
</script>

