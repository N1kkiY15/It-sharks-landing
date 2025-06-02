<template>
  <div class="about-us">
    <p class="about-us__text">
      У меня есть своя команда опытных менторов, с которыми мы работаем вместе уже не первый год.
      Мы сопровождаем наших учеников до выхода на работу и успешного прохождения испытательного
      срока.
    </p>
    <NuxtImg class="about-us__image" src="/images/Timur.png" alt="" loading="lazy" />

    <ButtonComponent class="about-us__link" variant="primary">
      <p class="about-us__link-text">Наш телеграм-канал</p>
      <TelegramIcon color="var(--bg-color)" class="about-us__icon" />
    </ButtonComponent>
  </div>
</template>

<script setup lang="ts">
  import TelegramIcon from '@assets/svg/socials/TelegramIcon.vue'
</script>

<style scoped lang="scss">
  .about-us {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 10px;

    @media (min-width: $breakpoint-sm) {
      grid-template-columns: 208px 172px;
      justify-content: end;
      column-gap: 70px;
    }

    @media (min-width: $breakpoint-md) {
      grid-template-columns: 291px 239px;
      justify-content: initial;
      margin-left: 125px;
      column-gap: 83px;
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 362px 303px;
      margin-left: 157px;
      column-gap: 108px;
    }

    @media (min-width: $breakpoint-xl) {
      grid-template-columns: 465px 290px;
      margin-left: 300px;
      column-gap: 35px;
    }

    @media (min-width: $breakpoint-xxl) {
      grid-template-columns: 445px 290px;
      margin-left: 324px;
      column-gap: 92px;
    }

    &__text {
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -1%;
      font-size: 12px;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: 286px;
        justify-self: right;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
        max-width: 362px;
      }

      @media (min-width: $breakpoint-xl) {
        font-size: 20px;
        max-width: 100%;
      }
    }

    &__link {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      grid-column: span 2;
      align-self: start;
      background-color: var(--accent-color);

      @media (min-width: $breakpoint-sm) {
        grid-column: 1;
        grid-row: 2;
      }

      @media (min-width: $breakpoint-md) {
        max-width: 238px;
        max-height: 50px;
        align-self: end;
      }

      @media (min-width: $breakpoint-lg) {
        max-width: 304px;
        max-height: initial;
        gap: 20px;
      }

      &-text {
        font-family: 'Clash Display', arial, sans-serif;
        color: var(--bg-color);
        padding: 3px 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;

        @media (min-width: $breakpoint-md) {
          font-size: 16px;
        }

        @media (min-width: $breakpoint-lg) {
          padding: 0;
          font-size: 20px;
        }
      }
    }

    &__image {
      width: 161px;
      height: 211px;

      @media (min-width: $breakpoint-sm) {
        width: 172px;
        height: 227px;
        grid-row: span 2;
      }

      @media (min-width: $breakpoint-md) {
        width: 239px;
        height: 315px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 303px;
        height: 400px;
      }

      @media (min-width: $breakpoint-xl) {
        width: 290px;
      }
    }

    &__icon {
      width: 17px;
      height: 15px;

      @media (min-width: $breakpoint-md) {
        width: 23px;
        height: 20px;
      }
    }
  }
</style>
