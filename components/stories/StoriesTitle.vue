<template>
  <div class="story-title" aria-labelledby="story-heading">
    <h2 class="story-title__heading" id="story-heading" role="heading">
      Реальные истории моих учеников
    </h2>

    <ArrowNavigation
      v-if="breakpointLg"
      aria-label="Навигация по историям"
      @previous-card="handlePreviousCard"
      @next-card="handleNextCard"
    />
  </div>
</template>

<script setup lang="ts">
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

  const BREAKPOINT_LG = 960
  const { enoughWidthToShow: breakpointLg } = useDisplay(BREAKPOINT_LG)
</script>

<style scoped lang="scss">
  .story-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__heading {
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
      color: var(--text-color);
      text-transform: uppercase;
      align-self: start;
      max-width: 227px;

      @media (min-width: $breakpoint-md) {
        font-size: 36px;
        max-width: 400px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 48px;
        max-width: 555px;
      }
    }
  }
</style>
