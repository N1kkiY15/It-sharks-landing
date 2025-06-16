<template>
  <h1 class="cover-header">
    <span class="cover-header__line">личное обучение</span>
    <span class="cover-header__line">менторы</span>
    <NuxtImg
      class="cover-header__image"
      src="/images/Shark.svg"
      alt=""
      role="presentation"
    />
  </h1>
</template>

<style scoped lang="scss">
  .cover-header {
    position: relative;
    width: 100%;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -1px;
    color: var(--text-color);
    text-transform: uppercase;
    text-align: right;

    @media (min-width: $breakpoint-sm) {
      font-size: 40px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 64px;
      margin-bottom: 5px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 85px;
    }

    @media (min-width: $breakpoint-xl) {
      font-size: 105px;
    }

    @media (min-width: $breakpoint-xxl) {
      font-size: 124px;
      margin-bottom: 10px;
    }

    &__line {
      display: block;
      width: 100%;

      &:first-child {
        text-align: left;
        position: relative;
        z-index: 2;

        &::after {
          content: '/';
        }
      }
    }

    &__image {
      position: absolute;
      width: 143px;
      height: 114px;
      top: 0;
      left: 43px;

      @media (min-width: $breakpoint-sm) {
        width: 197px;
        height: 155px;
        top: -10px;
        left: 70px;
      }

      @media (min-width: $breakpoint-md) {
        width: 247px;
        height: 195px;
        left: 220px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 355px;
        height: 280px;
        left: 200px;
        top: -15px;
      }

      @media (min-width: $breakpoint-xl) {
        width: 502px;
        height: 397px;
        left: 260px;
      }

      @media (min-width: $breakpoint-xxl) {
        left: 320px;
      }
    }
  }
</style>
