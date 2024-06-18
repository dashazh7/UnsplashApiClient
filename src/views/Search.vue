
<script setup>
import { ref, onBeforeMount, watch, onBeforeUnmount } from 'vue';
import { searchPhotos } from "@/api/unsplash.js";
import { useRoute } from 'vue-router';
import GridPhoto from "@/components/GridPhoto.vue";

const route = useRoute();
const images = ref([]);
const query = ref(route.query.q);
const loadPage = ref(1);

const imagesSearch = async () => {
  if (!query.value || !query.value.replaceAll(" ", "")) return;
  const data = await searchPhotos(query.value, loadPage.value, 50);
  images.value = images.value.concat(data.results)
};

const onScroll = (event) => {
  if ((window.scrollY + window.innerHeight) >= document.body.offsetHeight -  window.innerHeight / 4) {

    loadPage.value = loadPage.value + 1;
    imagesSearch();
  }
};

addEventListener("scroll", onScroll);
onBeforeUnmount(() => removeEventListener("scroll", onScroll))

watch(() => route.query, (newValue, oldValue) => {
  if (newValue.q !== oldValue.q) {
    images.value = [];
    loadPage.value = 1;
  }
  query.value = newValue.q;
  imagesSearch();
});

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