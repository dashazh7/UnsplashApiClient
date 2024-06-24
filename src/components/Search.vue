<script setup>
const queryString = defineModel()

const emit = defineEmits(['search'])

</script>

<template>
<div class="search">
  <input v-model="queryString" type="text" @change="emit('search')" placeholder="Поиск">
</div>
</template>

<style scoped>

.search {
  display: flex;
  width: 100%;
}

input {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: #F1F1F1;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 7px;
  outline: none;
  padding: 10px 15px;
}

</style>