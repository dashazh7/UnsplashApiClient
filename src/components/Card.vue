<script setup>
import { ref } from 'vue';
import ButtonHeart from "@/components/ButtonHeart.vue";

const isHover = ref(false)

defineProps({
  id: String,
  url: String
})
</script>

<template>
<div class="card" @mouseenter="isHover=true" @mouseleave="isHover=false">
  <img :src="url"/>
  <ButtonHeart  v-if="isHover"></ButtonHeart>
</div>
</template>

<style scoped>
.card {
  width: 100%;
  border-radius: 8px;
  position: relative;
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s background-color;
}

.card:hover:before {
  background-color: rgba(0, 0, 0, 0.5);
}

</style>