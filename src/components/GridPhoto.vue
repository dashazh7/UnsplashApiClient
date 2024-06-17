<script setup>
import {computed} from "vue";
import Card from "@/components/Card.vue";

const props = defineProps({
  images: Array
})

const itemsComputed = computed(() => {
  if (!props.images) return [];
  let chunks = [[], [], [], []];
  let chunkIndex = 0;
  for (let item of props.images) {
    if (chunkIndex > 3) chunkIndex = 0;
    chunks[chunkIndex].push(item);
    chunkIndex++;
  }

  return chunks;
});
</script>

<template>

  <div class="photo-grid">
    <template v-for="(chunk, i) in itemsComputed" :key="i">
      <div class="column">
        <template v-for="image in chunk" :key="image.id">
          <Card :id="image.id" :url="image.urls.regular"/>
        </template>
      </div>
    </template>

  </div>
</template>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>