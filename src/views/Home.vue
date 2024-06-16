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
  <div class="container">
    <header class="header">
      <div class="logo">Логотип</div>
      <Search v-model="query" @search="onSearch"/>
      <div class="links">
        <router-link to="/" class="link">Главная</router-link>
        <router-link to="/saved" class="link">Избранное</router-link>
        <router-link to="/info" class="link">Справка</router-link>
      </div>
    </header>

    <div class="photo-grid">
      <template v-for="image in images" :key="image.id">
        <Card :id="image.id" :url="image.urls.regular"/>
      </template>
    </div>
  </div>

</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.photo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
}

.links {
  display: flex;
  gap: 50px;
}

.link {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #000;
  font-size: 16px;
}

.router-link-active {
  font-weight: bold;
}

</style>