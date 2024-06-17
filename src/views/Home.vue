<script setup>

import GridPhoto from "@/components/GridPhoto.vue";
import {onBeforeMount, onBeforeUnmount, ref} from 'vue'
import { getPhotos } from "@/api/unsplash.js";

const images = ref([]);
const loadPage = ref(1);

const getNextPhotos = async () => {
  const newImages =  await getPhotos(loadPage.value, 20);
  images.value = images.value.concat(newImages);
}

const onScroll = (event) => {
  console.log(window.scrollHeight - window.scrollY)
  if ((window.scrollY + window.innerHeight) >= document.body.offsetHeight -  window.innerHeight / 4) {

    loadPage.value = loadPage.value + 1;
    getNextPhotos();
  }
};
addEventListener("scroll", onScroll);

onBeforeUnmount(() => removeEventListener("scroll", onScroll))
onBeforeMount(getNextPhotos)
</script>

<template>
  <div class="container">
    <GridPhoto :images="images"></GridPhoto>
  </div>

</template>

<style scoped>

.container {
  padding: 20px;
}

</style>