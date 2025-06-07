<template>
  <div class="default">
    <div class="default__container">
      <DefaultHeader />
      <slot />
      <DefautFooter />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .default {
    background-color: var(--bg-color);
    padding: 75px 15px 40px;
    font-family: 'Clash Display', arial, sans-serif;

    @media (min-width: $breakpoint-sm) {
      padding: 84px 15px 70px;
    }

    @media (min-width: $breakpoint-md) {
      padding: 20px 15px 100px;
    }

    @media (min-width: $breakpoint-lg) {
      padding: 20px 15px 100px;
    }

    @media (min-width: $breakpoint-xl) {
      padding: 20px 45px 100px;
    }

    &__container {
      max-width: 1260px;
      margin: 0 auto;
    }
  }
</style>
