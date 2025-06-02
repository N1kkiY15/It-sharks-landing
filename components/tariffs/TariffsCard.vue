<template>
  <div :id="`tariff-${tariff.id}`" class="tariffs-card">
    <div class="tariffs-card__description">

      <div class="tariffs-card__title">
        <span class="tariffs-card__subheader">{{ tariff.subtitle }}</span>
        <h3 class="tariffs-card__header">{{ tariff.title }}</h3>
      </div>

      <p class="tariffs-card__text">
        {{ tariff.description }}
      </p>
    </div>

    <ButtonComponent
      variant="primary"
      class="tariffs-card__button"
      aria-label="Написать мне в Telegram"
    >
      <p class="tariffs-card__button-text">{{ tariff.button }}</p>
      <TelegramIcon class="tariffs-card__button-icon" aria-hidden="true" />
    </ButtonComponent>
  </div>
</template>

<script setup lang="ts">
  import type { TariffCard } from '@/types'

  import TelegramIcon from '@assets/svg/TelegramIcon.vue'

  defineProps<{
    tariff: TariffCard;
  }>()


</script>

<style scoped lang="scss">
  .tariffs-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 20px;
    padding: 20px;
    border: 1px solid var(--text-color);
    border-radius: 20px;
    min-height: 303px;
    min-width: 330px;

    @media (min-width: $breakpoint-sm) {
      min-height: 383px;
      min-width: 297px;
    }

    @media (min-width: $breakpoint-md) {
      padding: 30px;
      gap: 30px;
    }

    @media (min-width: $breakpoint-lg) {
      gap: 20px;
    }

    @media (min-width: $breakpoint-xl) {
      padding: 50px;
    }

    &__description {
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media (min-width: $breakpoint-sm) {
        gap: 20px;
      }

      @media (min-width: $breakpoint-md) {
        gap: 30px;
      }
    }

    &__title {
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media (min-width: $breakpoint-lg) {
        gap: 5px;
      }
    }


    &__subheader {
      color: var(--decorative-color);
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: -1%;

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

    &__header {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -1%;
      text-transform: uppercase;

      @media (min-width: $breakpoint-sm) {
        font-size: 24px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 36px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 48px;
      }
    }

    &__text {
      white-space: pre-line;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: -1%;


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

    &__button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: auto;
      align-items: center;
      gap: 10px;
      color: var(--text-color);

      @media (min-width: $breakpoint-md) {
        min-width: 184px;
        margin-right: auto;
      }

      @media (min-width: $breakpoint-lg) {
        width: 100%;
      }

      &-text {
        color: var(--accent-color);
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
  }
</style>