<script setup>
import Search from "@/components/Search.vue";
import { useRoute, useRouter } from "vue-router";
import {ref, watch} from "vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconInfo from "@/components/icons/IconInfo.vue";

const router = useRouter();
const query = ref("");
const route = useRoute();

const onSearch = () => {
  if (!query.value || !query.value.replaceAll(" ", "")) return;
  router.push({ name: 'search', query: { q: query.value } });
}

watch(() => route.name, (newValue) => { if (newValue === 'search') return;
  query.value = "";})

const isRouteActive = (routeName) => {
  return route.name === routeName;
}

</script>

<template>
  <header class="header">
    <div class="logo">Логотип</div>
    <div class="links left-links">
      <router-link to="/" class="link">
        <div class="link-content">
          <IconHome :fill="isRouteActive('home') ? 'white' : '#2C2C2C'" :stroke="isRouteActive('home') ? 'white' : '#2C2C2C'" class="link-icon"></IconHome>
          Главная
        </div>
      </router-link>
      <router-link to="/saved" class="link">
        <div class="link-content">
          <IconHeart :fill="isRouteActive('saved') ? 'white' : '#2C2C2C'" :stroke="isRouteActive('saved') ? 'white' : '#2C2C2C'" class="link-icon"></IconHeart>
          Избранное
        </div>
      </router-link>
    </div>
    <Search v-model="query" @search="onSearch"/>
    <div class="links right-links">
      <router-link to="/info" class="link">
        <div class="link-content">
          <IconInfo class="link-icon"></IconInfo>
          Справка
        </div>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  width: 100%;
}

.links {
  display: flex;
  gap: 20px;
}

.link {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #2C2C2C;
  font-size: 16px;
  padding: 10px 15px;
}

.left-links .router-link-active {
  background-color: #EA526F;
  color: white;
  border-radius: 15px;
}

.link-content {
  display: flex;
  align-items: center;
}

.link-icon {
  width: 20px;
  height: 15px;
  margin-right: 8px;
}

</style>