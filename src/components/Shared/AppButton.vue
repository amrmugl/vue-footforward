<template>
  <router-link
    v-if="to"
    :class="classes"
    :to="to"
    class="transition-all focus:outline-none active:outline-none"
    ><slot
  /></router-link>
  <button
    class="transition-all focus:outline-none active:outline-none"
    :disabled="disabled"
    v-else
    @click="$emit('btnClicked')"
    :class="classes"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  classes: String,
  type: String,
  to: String,
  disabled: Boolean,
})
</script>
