<script setup>
defineProps({
  id: String,
  url: String
})
</script>

<template>
<div class="card">
  <img :src="url"/>
</div>
</template>

<style scoped>
.card {
  width: 100%;
  border-radius: 8px;
}

img {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>