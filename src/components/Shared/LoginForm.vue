<template>
  <form class="mt-10 mx-10 text-center" @submit.prevent="submitForm">
    <div class="relative mt-6">
      <img :src="usernameImage" class="inline-flex" alt="" />
      <input
        v-model="usernameValue"
        @focus="formError = ''"
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        autocomplete="off"
        class="h-10 w-full border-b-2 border-white bg-transparent focus:outline-none focus:border-appGreen-light peer placeholder-transparent"
      />
      <label
        for="username"
        class="absolute left-0 -top-3.5 text-sm peer-focus:-top-3.5 peer-focus:text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:top-2"
        >Username</label
      >
    </div>
    <div class="relative mt-6">
      <input
        v-model="passwordValue"
        @focus="formError = ''"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        autocomplete="off"
        class="h-10 w-full border-b-2 border-white bg-transparent focus:outline-none focus:border-appGreen-light peer placeholder-transparent"
      />
      <label
        for="password"
        class="absolute left-0 -top-3.5 text-sm peer-focus:-top-3.5 peer-focus:text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:top-2"
        >Password</label
      >
    </div>
    <p class="text-red-400 text-sm mt-5">{{ formError }}</p>
    <AppButton type="submit" classes="bg-appGreen px-5 py-1 rounded-md mt-10"
      >Login</AppButton
    >
  </form>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/Shared/AppButton.vue'
import useAuthForm from '@/hooks/LoginHook'

const usernameValue = ref('')
const passwordValue = ref('')
const formError = ref('')

const usernameImage = import('@/icons/username_icon.svg')

const { submitLogin } = useAuthForm()

const submitForm = () => {
  const values = {
    username: usernameValue.value,
    password: passwordValue.value,
  }
  submitLogin(values, formError)
}
</script>
