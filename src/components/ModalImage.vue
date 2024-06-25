<script setup>

defineProps({
  url: String,
});

const showImageModal = defineModel("show");

</script>

<template>
  <Teleport to="body">
    <div v-if="showImageModal" class="modal" @click="showImageModal = false">
      <img :src="url" alt="" class="modal-image" />
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}

</style>