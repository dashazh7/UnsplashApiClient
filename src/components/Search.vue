<script setup>
const queryString = defineModel()

const emit = defineEmits(['search'])
</script>

<template>
<div class="search">
  <input v-model="queryString" type="text" @change="emit('search')">
</div>
</template>

<style scoped>

</style>