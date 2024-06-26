<script setup>

</script>

<template>
  <div class="general-info">
    <h1>Добро пожаловать в наше приложение!</h1>
    <p>
      Здесь вы можете <span>находить</span> и <span>сохранять</span> в избранное красивые фотографии с
      <a target="_blank" href="https://unsplash.com/">Unsplash</a>.
    </p>

    <img src="@/components/icons/2.jfif" alt="">
    <img src="@/components/icons/3.jfif" alt="">
  </div>
</template>

<style scoped>
.general-info h1, .general-info p {
  margin-top: 30px;
}

.general-info h1 {
  font-size: 40px;
  font-weight: 600;
  color: #EA526F;
}

.general-info p {
  font-size: 18px;
  padding-bottom: 30px;
}

img {
  width: 300px;
  height: 200px;
  margin-right: 20px;
  border-radius: 8px;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  color: #EA526F;
}

span {
  font-weight: 600;
  color: #EA526F;
}
</style>