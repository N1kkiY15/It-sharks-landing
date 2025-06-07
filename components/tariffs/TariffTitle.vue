<template>
  <div class="tariffs-title" aria-labelledby="tariffs-heading">
    <p class="tariffs-title__header">тарифы</p>

    <ArrowNavigation
      v-if="EnoughWidthToShow"
      aria-label="Навигация по тарифам"
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

  const BREAKPOINT_MD = 768
  const { EnoughWidthToShow } = useDisplay(BREAKPOINT_MD)
</script>


<style scoped lang="scss">
  .tariffs-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__header {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: -1%;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 20px;
      }
    }
  }
</style>