<template>
  <CoverSection class="cover"/>
  <AboutSection class="about"data-aos="fade-up"/>
  <TeamSection class="team" data-aos="fade-up"/>
  <ProgramSection class="program" data-aos="fade-up"/>
  <StoriesSection class="stories" data-aos="fade-up"/>
  <GradesSection class="grades" data-aos="fade-up"/>
  <DescriptionSection class="description" data-aos="fade-up"/>
  <TariffsSection class="tariffs" data-aos="fade-up" />
  <ReviewsSection class="reviews" data-aos="fade-up" />
  <FAQSection class="faq" data-aos="fade-up" />
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