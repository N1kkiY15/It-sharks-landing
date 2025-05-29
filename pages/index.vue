<template>
  <Cover class="cover"/>
  <About class="about"/>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.cover, .about {
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