<template>
  <section class="footer">
    <div class="footer__text">
      <p>Остались вопросы?</p>
      <p>Запишись на бесплатную консультацию!</p>
    </div>

    <div class="footer__container">
      <div>
        <p class="footer__logo">IT SHARKS</p>
        <ButtonComponent
          class="footer__button"
          variant="primary"
          tag="a"
          href="https://t.me/+K-gGhf8lGYQ1NThi"
          aria-label="Записаться на консультацию"
        >
          <p class="footer__button-text">Записаться на консультацию</p>
          <TelegramIcon class="footer__button-icon" />
        </ButtonComponent>
      </div>

      <ReadMore
        class="footer__scroll">
        aria-label="Подняться наверх"
        @click="scrollToTop"
        >
        <template #text>на верх</template>
        <template #icon>
          <DoubleArrow class="footer__arrow" />
        </template>
      </ReadMore>
    </div>
  </section>
</template>

<script setup lang="ts">

  import TelegramIcon from '@assets/svg/socials/TelegramIcon.vue'
  import DoubleArrow from '@assets/svg/arrows/DoubleArrow.vue'
  import { scrollToSection } from '~/composables/useScrollTo'

  const { scrollToTop } = scrollToSection()

</script>

<style scoped lang="scss">
  .footer {
    display: flex;
    flex-direction: column;
    color: var(--text-color);

    &__container {
      display: flex;
      flex-direction: column;
      gap: 40px;

      @media (min-width: $breakpoint-sm) {
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: -1%;
      margin-bottom: 5px;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
        flex-direction: row;
        gap: 5px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
        margin-bottom: 0;
      }
    }

    &__logo {
      font-weight: 400;
      font-size: 32px;
      line-height: 100%;
      letter-spacing: -2%;
      margin-bottom: 10px;

      @media (min-width: $breakpoint-sm) {
        font-size: 40px;
        margin-bottom: 40px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 64px;
        margin-bottom: 30px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 128px;
        margin-bottom: 0;
      }
    }

    &__button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 35px;
      max-width: 230px;
      color: var(--accent-color);

      @media (min-width: $breakpoint-sm) {
        max-width: 260px;
      }

      @media (min-width: $breakpoint-md) {
        min-height: 50px;
        max-width: 303px;
      }

      @media (min-width: $breakpoint-lg) {
        max-width: 386px;
      }

      &-text {
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;

        @media (min-width: $breakpoint-sm) {
          font-size: 14px;
        }

        @media (min-width: $breakpoint-md) {
          font-size: 16px;
        }

        @media (min-width: $breakpoint-lg) {
          font-size: 20px;
        }
      }

      &-icon {
        width: 17px;
        height: 15px;

        @media (min-width: $breakpoint-md) {
          width: 23px;
          height: 20px;
        }
      }
    }

    &__scroll {
      &:active :deep(.icon-path) {
        fill: var(--text-color);
      }
    }

    &__arrow {
      width: 11px;
      height: 11px;
      transform: rotate(180deg);

      :deep(.icon-path) {
        fill: var(--decorative-color);
      }

      @media (min-width: $breakpoint-md) {
        width: 16px;
        height: 16px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 29px;
        height: 29px;
      }
    }
  }
</style>
