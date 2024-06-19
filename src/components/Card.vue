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
  <div class="over" v-if="isHover"> </div>
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

.over {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
}

</style>