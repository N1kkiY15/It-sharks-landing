<template>
  <div class="cover-title">
    <div class="cover-title__line" role="heading" aria-label="ONE TO ONE">
      <span class="cover-title__line-span" aria-hidden="true"> ONE </span>
      <RightArrow class="cover-title__line-arrow" aria-hidden="true" />
      <span class="cover-title__line-span" aria-hidden="true"> TO </span>
      <RightArrow class="cover-title__line-arrow" aria-hidden="true" />
      <span class="cover-title__line-span" aria-hidden="true"> ONE </span>
    </div>
    <div class="cover-title__socials">
      <EmailButton
        class="cover-title__socials-button"
        tag="a"
        href="mailto:timmyya999@gmail.com"
        aria-label="Написать на почту"
      />
      <TelegramButton
        class="cover-title__socials-button"
        tag="a"
        href="https://t.me/+K-gGhf8lGYQ1NThi"
        aria-label="Написать в телеграм"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import RightArrow from '@assets/svg/arrows/RightArrow.vue'
</script>

<style scoped lang="scss">
  .cover-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    @media (min-width: $breakpoint-sm) {
      margin-bottom: 5px;
    }

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &__line {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;

      &-arrow {
        width: 22px;
        height: 16px;

        @media (min-width: $breakpoint-sm) {
          width: 32px;
          height: 24px;
        }

        @media (min-width: $breakpoint-md) {
          width: 50px;
          height: 37px;
        }
      }

      &-span {
        font-weight: 400;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -2%;
        color: var(--cover-title-color);

        @media (min-width: $breakpoint-sm) {
          font-size: 36px;
        }

        @media (min-width: $breakpoint-md) {
          font-size: 64px;
        }

        @media (min-width: $breakpoint-lg) {
          font-size: 80px;
        }

        @media (min-width: $breakpoint-xl) {
          font-size: 96px;
        }
      }
    }

    &__socials {
      display: none;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      @media (min-width: $breakpoint-sm) {
        display: flex;
      }

      @media (min-width: $breakpoint-md) {
        gap: 10px;
      }

      @media (min-width: $breakpoint-xl) {
        gap: 20px;
      }

      &-button {
        width: 35px;
        height: 35px;
        padding: 9px;

        @media (min-width: $breakpoint-md) {
          width: 53px;
          height: 53px;
          padding: 12px;
        }

        @media (min-width: $breakpoint-lg) {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
</style>
