<template>
  <Cover class="cover"/>
  <About class="about"/>
  <TeamSection />
  <ProgramSection />
  <DescriptionSection  class="description"/>
</template>

<script setup lang="ts">

import DescriptionSection from '@components/Descriprion/DescriptionSection.vue'
</script>

<style scoped lang="scss">
.cover, .about, .description {
  margin-bottom: 40px;

  @media (min-width: $breakpoint-sm) {
    margin-bottom: 70px;
  }

  @media (min-width: $breakpoint-md) {
    margin-bottom: 80px;
  }

  @media (min-width: $breakpoint-lg) {
    margin-bottom: 150px;
  }
}

.cover {
  margin-bottom: 100px;

  @media (min-width: $breakpoint-sm) {
    margin-bottom: 70px;
  }

  @media (min-width: $breakpoint-md) {
    margin-bottom: 100px; // для .about
  }
}

</style>