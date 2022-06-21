<template>
  <div class="container text-center mt-10">
    <AppButton
      to="/admin/additem"
      classes="bg-appGreen px-5 py-1 rounded-md hover:bg-appGreen-light hover:text-appBlack"
      >Add New Item</AppButton
    >
  </div>
</template>

<script setup>
import AppButton from '@/components/Shared/AppButton.vue'
</script>
