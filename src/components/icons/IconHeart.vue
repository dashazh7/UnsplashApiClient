<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="55" viewBox="0 0 56 55" fill="none">
    <path d="M4.66675 19.2502C4.66617 15.928 6.02565 12.7452 8.43931 10.4177C10.853 8.09023 14.1181 6.81365 17.5001 6.87517C21.5072 6.85427 25.3307 8.52328 28.0001 11.4585C30.6694 8.52328 34.493 6.85427 38.5001 6.87517C41.8821 6.81365 45.1472 8.09023 47.5609 10.4177C49.9745 12.7452 51.334 15.928 51.3334 19.2502C51.3334 31.5243 36.4491 40.7918 28.0001 48.1252C19.5697 40.73 4.66675 31.5335 4.66675 19.2502Z" :stroke="stroke" :fill="fill" stroke-width="3"/>
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