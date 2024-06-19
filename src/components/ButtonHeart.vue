<script setup>
import {computed, ref} from 'vue';

import IconHeart from "@/components/icons/IconHeart.vue";

const isClicked = ref(false)

const changeColor = () => {
  isClicked.value = !isClicked.value;
}

const color = computed(() => {
  return isClicked.value ? 'red' :undefined
})
</script>

<template>
  <button @click="changeColor">
    <IconHeart class="btn-icon" :fill="color" :stroke="color"></IconHeart>
  </button>
</template>

<style scoped>
button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 7px;
  border: none;
  border-radius: 30px;
  display: flex;
}

.btn-icon {
  width: 20px;
  height: auto;
}

</style>