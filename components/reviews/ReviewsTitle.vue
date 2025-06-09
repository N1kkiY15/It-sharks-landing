<template>
  <div>
    <div class="reviews" aria-labelledby="story-heading">
      <h2 class="reviews__heading" id="story-heading" role="heading">Честные отзывы</h2>

      <MoreReviewsBlock class="reviews__more-reviews reviews__more-reviews--desktop" />

      <ArrowNavigation
        v-if="breakpointXl"
        aria-label="Навигация по отзывам"
        @previous-card="handlePreviousCard"
        @next-card="handleNextCard"
      />
    </div>

    <MoreReviewsBlock class="reviews__more-reviews reviews__more-reviews--mobile" />
  </div>
</template>

<script setup lang="ts">
  import MoreReviewsBlock from '@components/reviews/MoreReviewsBlock.vue'
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

  const BREAKPOINT_XL = 1280
  const { enoughWidthToShow: breakpointXl } = useDisplay(BREAKPOINT_XL)
</script>

<style scoped lang="scss">
  .reviews {
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

    &__more-reviews--mobile {
      @media (min-width: $breakpoint-md) {
        margin-top: 20px;
      }

      @media (min-width: $breakpoint-xl) {
        display: none;
      }
    }

    &__more-reviews--desktop {
      display: none;
      @media (min-width: $breakpoint-xl) {
        display: flex;
      }
    }
  }
</style>
