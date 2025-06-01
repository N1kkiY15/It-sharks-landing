<template>
  <CoverSection class="cover" />
  <AboutSection class="about" />
  <TeamSection class="team" />
  <ProgramSection class="program" />
  <StoriesSection class="stories" />
  <GradesSection class="grades" />
</template>

<style scoped lang="scss">
  .about,
  .team,
  .program,
  .grades,
  .stories {
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
