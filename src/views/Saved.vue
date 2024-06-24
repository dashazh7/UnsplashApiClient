<script setup>
import {ref, onBeforeMount} from 'vue';
import GridPhoto from "@/components/GridPhoto.vue";
import { getFavorites } from "@/api/favorites/api.js";

const savedImages = ref()

const getSavedPhotos = async () => {
  savedImages.value =  await getFavorites();
}

onBeforeMount(getSavedPhotos)

</script>

<template>
  <div class="container">
    <GridPhoto :images="savedImages"></GridPhoto>
  </div>
</template>

<style scoped>

</style>