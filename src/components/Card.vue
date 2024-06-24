<script setup>
import {onBeforeMount, ref} from 'vue';
import ButtonHeart from "@/components/ButtonHeart.vue";
import { getFavorite, deleteFavorite, createFavorite } from "@/api/favorites/api.js";

const isHover = ref(false)

const props = defineProps({
  unsplashId: String,
  url: String,
  title: String,
  description: String
})

const isAddedToFavorite = ref(false)

const addOrDeleteToFavorite = async () => {
  try {
    if (isAddedToFavorite.value) {
      await deleteFavorite(props.unsplashId)
    } else {
      await createFavorite({photo_id: props.unsplashId, photo_url: props.url, title: props.title, description: props.description})
    }
    isAddedToFavorite.value = !isAddedToFavorite.value;
  } catch {}
}

onBeforeMount(async () => {
  try {
    await getFavorite(props.unsplashId)
    isAddedToFavorite.value = true
  } catch {}
})


</script>

<template>
<div class="card" @mouseenter="isHover=true" @mouseleave="isHover=false">
  <img :src="url"/>
  <ButtonHeart  v-show="isHover" v-model:isFavorite="isAddedToFavorite" @click="addOrDeleteToFavorite"></ButtonHeart>
</div>
</template>

<style scoped>
.card {
  width: 100%;
  border-radius: 8px;
  position: relative;
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s background-color;
}

.card:hover:before {
  background-color: rgba(0, 0, 0, 0.5);
}

</style>