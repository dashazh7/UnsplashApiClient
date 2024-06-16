<script setup>
import { ref, onBeforeMount } from 'vue';
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import { searchPhotos } from "@/api/unsplash.js";
import { useRoute } from 'vue-router';

const route = useRoute();
const images = ref([]);
const query = ref(route.query.q);

const onSearch = async () => {
  if (!query.value || !query.value.replaceAll(" ", "")) return;
  const data = await searchPhotos(query.value, 1, 10);
  images.value = data.results;
};

onBeforeMount(onSearch);
</script>

<template>

  <header class="header">
    <div class="logo">Логотип</div>
    <Search v-model="query" @search="onSearch"/>
    <div class="links">
      <router-link to="/" class="link">Главная</router-link>
    </div>
  </header>

  <div class="photo-grid">
    <template v-for="image in images" :key="image.id">
      <Card :id="image.id" :url="image.urls.regular"/>
    </template>
  </div>
</template>

<style scoped>
.photo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.links {
  display: flex;
  gap: 50px;
}

.link {
  text-decoration: none;
  color: #000;
  font-size: 16px;
}

</style>