<script setup>

import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import { onBeforeMount, ref } from 'vue'
import { getPhotos } from "@/api/unsplash.js";
import { useRouter } from 'vue-router';

const router = useRouter();
const images = ref();
const query = ref("");

const getDefaultPhotos = async () => {
  images.value = await getPhotos(3, 50);
}

const onSearch = async () => {
  if (!query.value || !query.value.replaceAll(" ", "")) return;
  router.push({ name: 'search', query: { q: query.value } });
}

onBeforeMount(getDefaultPhotos)
</script>

<template>
  <div>
    <header class="header">
      <div class="logo">Логотип</div>
      <Search v-model="query" @search="onSearch"/>
      <div class="links">
        <router-link to="/" class="link">Главная</router-link>
        <router-link to="/saved" class="link">Избранное</router-link>
        <router-link to="/info" class="link">Справка</router-link>
      </div>
    </header>
  </div>

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