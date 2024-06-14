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
  width: 200px;
}

img {
  width: 200px;
}
</style>