<template>
  <div
    @click="goHome"
    class="font-bebas hover:cursor-pointer"
    :class="fontSize"
  >
    FOOT&nbsp;<span class="bg-appGreen" :class="paddings">FORWARD</span>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
defineProps({
  fontSize: String,
  paddings: String,
})

const router = useRouter()
const goHome = () => {
  router.push({ path: '/' })
}
</script>
