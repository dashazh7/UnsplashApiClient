<script setup>
const queryString = defineModel()

const emit = defineEmits(['search'])
</script>

<template>
<div class="search">
<!--  <input v-model="queryString" type="text" @change="emit('search')">-->
  <input v-model="queryString" type="text">
  <button @click="emit('search')">Search</button>
</div>
</template>

<style scoped>
.search {
  display: flex;
  flex-grow: 1;
  margin-right: 50px;
  margin-left: 30px;
}

input {
  flex-grow: 1;
  padding: 3px;
  font-size: 14px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-left: 10px;
  padding: 2px 10px;
  font-size: 14px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;

}
</style>