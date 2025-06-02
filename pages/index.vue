<template>
  <Cover class="cover"/>
  <About class="about"/>
  <TeamSection class="team"/>
  <ProgramSection class="program"/>
  <StoriesSection class="stories"/>
  <GradesSection class="grades"/>
  <DescriptionSection  class="description"/>
</template>

<script setup lang="ts">

import DescriptionSection from '@components/Descriprion/DescriptionSection.vue'
</script>

<style scoped lang="scss">
.about,
.team,
.program,
.grades,
.stories,
.description {
  margin-bottom: 40px;

    @media (min-width: $breakpoint-sm) {
      margin-bottom: 70px;
    }

    @media (min-width: $breakpoint-md) {
      margin-bottom: 100px;
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
      margin-bottom: 100px;
    }

    @media (min-width: $breakpoint-lg) {
      margin-bottom: 150px;
    }
  }
</style>