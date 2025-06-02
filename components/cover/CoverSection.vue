<template>
  <section class="cover">
    <CoverTitle />
    <CoverHeader />
    <CoverDetails />

    <h3 class="cover__exclusive">exclusive .</h3>
    <p class="cover__info">Python разработка, Mobile dev, Frontend, Golang, Product manager, ML</p>
    <CoverButtons />
  </section>
</template>

<style scoped lang="scss">
  .cover {
    position: relative;
    margin-bottom: 60px;

    @media (min-width: $breakpoint-lg) {
      margin-bottom: 150px;
    }

    @media (min-width: $breakpoint-xl) {
      margin-bottom: 100px;
    }

    &__info {
      color: #f4f4f4b2;
      max-width: 139px;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      text-align: left;
      margin: 0 15px 117px auto;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
        max-width: 189px;
        margin: 0 0 103px auto;
      }

      @media (min-width: $breakpoint-md) {
        max-width: 308px;
        font-size: 16px;
        margin-bottom: 86px;
      }

      @media (min-width: $breakpoint-lg) {
        max-width: 384px;
        font-size: 20px;
        margin-bottom: 60px;
      }

      @media (min-width: $breakpoint-xl) {
        max-width: 384px;
        font-size: 20px;
        margin-bottom: 100px;
      }
    }

    &__exclusive {
      position: absolute;
      left: 0;
      top: 215px;
      color: var(--text-color);
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -1%;

      @media (min-width: $breakpoint-sm) {
        font-size: 16px;
        top: 240px;
      }

      @media (min-width: $breakpoint-md) {
        top: 234px;
        font-size: 24px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 36px;
        top: 284px;
      }

      @media (min-width: $breakpoint-xl) {
        top: 324px;
      }

      @media (min-width: $breakpoint-xxl) {
        top: 344px;
      }
    }
  }
</style>
