<template>
  <div class="flex justify-end items-center mt-24">
    <AppLogo font-size="text-2xl" paddings="pl-1 pr-12 py-2" />
  </div>
  <div>
    <h2 class="font-bebas text-2xl text-center mt-16">
      Please Login to Continue
    </h2>
    <LoginForm />
  </div>
</template>

<script setup>
import AppLogo from '@/components/Shared/AppLogo.vue'
import LoginForm from '@/components/Shared/LoginForm.vue'
</script>
