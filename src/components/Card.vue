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
  width: calc(20% - 20px);
  margin-bottom: 16px;
  border-radius: 8px;
}

img {
  width: 100%;
  border-radius: 8px;
}
</style>