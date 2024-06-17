<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { searchPhotos } from "@/api/unsplash.js";
import { useRoute } from 'vue-router';
import GridPhoto from "@/components/GridPhoto.vue";

const route = useRoute();
const images = ref([]);
const query = ref(route.query.q);

const imagesSearch = async () => {
  if (!query.value || !query.value.replaceAll(" ", "")) return;
  const data = await searchPhotos(query.value, 1, 50);
  images.value = data.results;
};

watch(() => route.query, (newValue) => {query.value=newValue.q; imagesSearch()})

onBeforeMount(imagesSearch);
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