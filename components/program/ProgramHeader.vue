<template>
  <h2 class="program-header">
    <span class="program-header__line">программа</span>
    <span class="program-header__line">формат</span>
  </h2>
</template>

<style scoped lang="scss">
  .program-header {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 100%;
    letter-spacing: -2%;
    text-transform: uppercase;
    color: var(--text-color);

    @media (min-width: $breakpoint-sm) {
      font-size: 40px;
      margin-bottom: 10px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 64px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 94px;
      margin-bottom: 30px;
    }

    @media (min-width: $breakpoint-xl) {
      font-size: 110px;
    }

    @media (min-width: $breakpoint-xxl) {
      font-size: 128px;
    }

    &__line {
      &:first-child::after {
        content: ' /';
        color: var(--accent-color);
      }
    }
  }
</style>
