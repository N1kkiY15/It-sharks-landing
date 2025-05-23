<template>
  <div class="default">
    <div class="default__container">
      <DefaultHeader/>
      <slot/>
      <DefautFooter/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.default {
  background-color: var(--bg-color);
  padding: 20px 90px 100px;
  font-family: 'Clash Display', arial, sans-serif;

  &__container {
    max-width: 1260px;
    margin: 0 auto;
  }

  @media (max-width: $breakpoint-xl) {
    padding: 20px 45px 100px;
  }

  @media (max-width: $breakpoint-lg) {
    padding: 20px 15px 100px;
  }

  @media (max-width: $breakpoint-md) {
    padding: 20px 15px 100px;
  }

  @media (max-width: $breakpoint-sm) {
    padding: 20px 15px 70px;
  }

  @media (max-width: $breakpoint-xs) {
    padding: 20px 15px 40px;
  }
}
</style>