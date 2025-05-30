<template>
  <article class="grades-card">
    <div class="grades-card__description">
      <span class="grades-card__description-header">{{ grade.grade }}</span>
      <p class="grades-card__description-text">
        {{ grade.description }}
      </p>
    </div>

    <ButtonComponent
        variant="primary"
        class="grades-card__button"
        aria-label="Написать мне в Telegram"
    >
      <p class="grades-card__button-text">Написать мне</p>
      <TelegramIcon class="grades-card__button-icon" aria-hidden="true"/>
    </ButtonComponent>
  </article>
</template>

<script setup lang="ts">
import TelegramIcon from "@assets/svg/TelegramIcon.vue";
import type {GradesCard} from "@/types";

defineProps<{
  grade: GradesCard;
}>();

</script>

<style scoped lang="scss">
.grades-card {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  padding: 20px;
  border: 1px solid var(--text-color);
  border-radius: 20px;

  @media (min-width: $breakpoint-md) {
    padding: 30px;
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

    @media (min-width: $breakpoint-md) {
      gap: 30px;
    }


    &-header {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -1%;
      text-transform: uppercase;

      @media (min-width: $breakpoint-sm) {
        font-size: 20px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 36px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 48px;
      }
    }

    &-text {
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
      min-width: 237px;
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