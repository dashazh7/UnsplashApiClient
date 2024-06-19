<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="45" viewBox="0 0 38 45" fill="none">
    <path d="M1.01692 17.9833L17.3503 1.64997C18.2614 0.739074 19.7384 0.739074 20.6496 1.64997L36.9829 17.9833C37.4205 18.4208 37.6666 19.0142 37.6666 19.633V42.0003C37.6666 43.289 36.6219 44.3336 35.3333 44.3336H23.6666V28.0003H14.3333V44.3336H2.66659C1.37792 44.3336 0.333252 43.289 0.333252 42.0003V19.633C0.333252 19.0142 0.579303 18.4208 1.01692 17.9833Z" :stroke="stroke" :fill="fill" stroke-width="3"/>
  </svg>
</template>

<script setup lang="ts">
defineProps(
    {
      fill: {
        type: String
      },
      stroke: {
        type: String,
        default: 'black'
      }
    }
)
</script>