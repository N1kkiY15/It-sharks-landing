<template>
  <section :id="`tariff-${tariff.id}`" class="tariffs-card">
    <div class="tariffs-card__description">

      <div class="tariffs-card__title">
        <span class="tariffs-card__subheader">{{ tariff.subtitle }}</span>
        <h3 class="tariffs-card__header">{{ tariff.title }}</h3>
      </div>

      <div
        class="tariffs-card__text"
        v-html="tariff.description"
      />

    </div>
    <ButtonComponent
      variant="primary"
      class="tariffs-card__button"
      aria-label="Написать мне в Telegram"
      :style="buttonStyles"
    >
      <p class="tariffs-card__button-text">{{ tariff.button.title }}</p>
      <component class="tariffs-card__button-icon" :is="tariff.component" aria-hidden="true" />
    </ButtonComponent>
  </section>
</template>

<script setup lang="ts">
  import type { TariffCard } from '@/types'

  const props = defineProps<{
    tariff: TariffCard;
  }>()

  const buttonStyles = computed(() => ({
    backgroundColor: props.tariff.button.color,
    color: props.tariff.button.textcolor
  }))

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

    :deep(ul) {
      line-height: 160%;

      li::first-letter {
        color: #4e4e4e;
      }
    }

    @media (min-width: $breakpoint-sm) {
      min-height: 383px;
      min-width: 297px;
    }

    @media (min-width: $breakpoint-md) {
      padding: 30px;
      gap: 40px;
    }

    @media (min-width: $breakpoint-lg) {
      gap: 30px;
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
        font-size: 44px;
      }
    }

    &__text {
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
      min-height: 35px;

      @media (min-width: $breakpoint-md) {
        max-width: 386px;
        min-height: 50px;
        gap: 20px;
      }

      @media (min-width: $breakpoint-lg) {
        min-height: 60px;
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
  }
</style>