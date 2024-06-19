<script setup>
import Search from "@/components/Search.vue";
import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";

const router = useRouter();
const query = ref("");
const route = useRoute();

const onSearch = () => {
  if (!query.value || !query.value.replaceAll(" ", "")) return;
  router.push({ name: 'search', query: { q: query.value } });
}

watch(() => route.name, (newValue) => { if (newValue === 'search') return;
  query.value = "";})

</script>

<template>
  <header class="header">
    <div class="logo">Логотип</div>
    <div class="links left-links">
      <router-link to="/" class="link">Главная</router-link>
      <router-link to="/saved" class="link">Избранное</router-link>
    </div>
    <Search v-model="query" @search="onSearch"/>
    <div class="links right-links">
      <router-link to="/info" class="link">Справка</router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  width: 100%;
}

.links {
  display: flex;
  gap: 30px;
}

.link {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #000;
  font-size: 16px;
  padding: 7px 15px;
}

.router-link-active {
  background-color: #2c3e50;
  border-radius: 12px;

}
</style>