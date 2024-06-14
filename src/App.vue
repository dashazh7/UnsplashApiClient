<script setup>
import {onBeforeMount, onMounted, ref} from 'vue'
import Card from "./components/Card.vue";
import Search from "./components/Search.vue";
import {getPhotos, searchPhotos} from "./api/unsplash.js";


const images = ref();
const query = ref("");

const getDefaultPhotos = async () => {
  images.value = await getPhotos(3, 10);
}

const onSearch = async () => {
  if (!query.value || !query.value.replaceAll(" ", ""))
    return
  const data = await searchPhotos(query.value, 2, 10);
  images.value = data.results;
}

onBeforeMount(getDefaultPhotos)
</script>

<template>
  <Search v-model="query" @search="onSearch"/>

  <template v-for="image in images" :key="image.id">
    <Card :id="image.id" :url="image.urls.regular"/>
  </template>



</template>
