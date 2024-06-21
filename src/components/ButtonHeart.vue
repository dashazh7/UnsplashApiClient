<script setup>
import {computed} from 'vue';

import IconHeart from "@/components/icons/IconHeart.vue";

const isFavorite = defineModel("isFavorite")

const color = computed(() => {
  return isFavorite.value ? '#EA526F' :undefined
})
</script>

<template>
  <button>
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