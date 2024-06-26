<script setup>
import GeneralInformation from "@/components/GeneralInformation.vue";
import ApplicationFunctions from "@/components/ApplicationFunctions.vue";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions.vue";
import ContactInformation from "@/components/ContactInformation.vue";
</script>

<template>
  <div class="container main-block">
    <GeneralInformation></GeneralInformation>
    <ApplicationFunctions></ApplicationFunctions>
    <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
    <ContactInformation></ContactInformation>
  </div>
</template>

<style scoped>
.main-block {
  max-width: 1000px;
  margin: 0 auto;
  color: #2c3e50;
}
</style>