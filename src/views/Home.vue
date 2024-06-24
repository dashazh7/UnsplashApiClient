<script setup>

import GridPhoto from "@/components/GridPhoto.vue";
import {onBeforeMount, onBeforeUnmount, ref} from 'vue'
import { getRandomPhotos } from "@/api/unsplash/api.js";

const images = ref([]);

const getNextPhotos = async () => {
  const newImages =  await getRandomPhotos(20);
  images.value = images.value.concat(newImages);
}

const onScroll = (event) => {
  if ((window.scrollY + window.innerHeight) >= document.body.offsetHeight -  window.innerHeight / 4) {

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
