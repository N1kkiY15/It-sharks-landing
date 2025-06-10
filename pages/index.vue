<template>
  <CoverSection class="cover"/>
  <AboutSection class="about"/>
  <TeamSection class="team"/>
  <ProgramSection class="program"/>
  <StoriesSection class="stories"/>
  <GradesSection class="grades"/>
  <DescriptionSection class="description"/>
  <TariffsSection class="tariffs" />
  <ReviewsSection class="reviews" />
  <FAQSection class="faq"/>
</template>

<script setup lang="ts">
import TariffsSection from '@components/tariffs/TariffsSection.vue'
import DescriptionSection from '@components/Descriprion/DescriptionSection.vue'
</script>

<style scoped lang="scss">
.about,
.team,
.program,
.grades,
.stories,
.description,
.tariffs,
.reviews,
.faq {
  margin-bottom: 40px;
  scroll-margin-top: 80px;

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