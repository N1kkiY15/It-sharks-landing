<template>
  <div class="team-title">
    <div class="team-title__container">
      <span class="team-title__heading">Команда</span>

      <div class="team-title__description">
        <p class="team-title__description-text">
          За все время суммарного обучения мы с командой «вкатили» более 80 учеников — с моей личной
          поддержкой.
        </p>

        <ArrowNavigation
          v-if="breakpointMd"
          aria-label="Навигация по команде"
          @previous-card="handlePreviousCard"
          @next-card="handleNextCard" />
      </div>
    </div>
    <StarType0 class="team-title__star" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
  import StarType0 from '@assets/svg/stars/StarType0.vue'
  import { useDisplay } from '~/composables/useDisplay'

  const emit = defineEmits<{
    (e: 'previous-card'): void
    (e: 'next-card'): void
  }>()

  const handlePreviousCard = () => {
    emit('previous-card')
  }

  const handleNextCard = () => {
    emit('next-card')
  }

  const BREAKPOINT_MD = 768
  const { enoughWidthToShow: breakpointMd } = useDisplay(BREAKPOINT_MD)
</script>

<style scoped lang="scss">
  .team-title {
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    &__container {
      display: flex;
      flex-direction: column;
      gap: 5px;

      @media (min-width: $breakpoint-md) {
        gap: 10px;
      }

      @media (min-width: $breakpoint-lg) {
        gap: 20px;
      }
    }

    &__heading {
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
      color: var(--text-color);
      text-transform: uppercase;
      align-self: start;

      @media (min-width: $breakpoint-md) {
        font-size: 36px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 48px;
      }
    }

    &__description {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &-text {
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        max-width: 195px;
        color: var(--text-color-secondary);

        @media (min-width: $breakpoint-sm) {
          font-size: 14px;
          max-width: 311px;
        }

        @media (min-width: $breakpoint-md) {
          font-size: 16px;
          max-width: 484px;
        }

        @media (min-width: $breakpoint-lg) {
          font-size: 20px;
          max-width: 610px;
        }
      }
    }

    &__star {
      display: none;

      @media (min-width: $breakpoint-md) {
        display: block;
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
