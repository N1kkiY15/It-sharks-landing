<template>
  <div :id="`review-${review.id}`" class="reviews-card">
    <div class="reviews-card__author">
      <span class="reviews-card__author-name">
        {{ review.name }}
      </span>
      <span class="reviews-card__author-nickname">
        {{ review.nickname }}
      </span>
    </div>

    <div class="reviews-card__content-text" v-html="review.text" />
  </div>
</template>

<script setup lang="ts">
  import type { ReviewCard } from '@/types'

  defineProps<{
    review: ReviewCard
  }>()
</script>

<style scoped lang="scss">
  .reviews-card {
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    scroll-snap-align: center;
    flex: 1 0 auto;
    height: auto;
    gap: 15px;
    max-width: 330px;
    padding-right: 4px;

    &__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 15px;

      &-description {
        display: flex;
        flex-direction: column;
        gap: 5px;

        @media (min-width: $breakpoint-md) {
          gap: 10px;
        }
      }

      &-heading {
        color: var(--text-color-secondary);
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

      &-text {
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: -1%;
        min-width: auto;
        white-space: pre-wrap;

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

    @media (min-width: $breakpoint-sm) {
      max-width: 290px;
    }

    @media (min-width: $breakpoint-md) {
      max-width: 350px;
      gap: 30px;
    }

    @media (min-width: $breakpoint-lg) {
      max-width: initial;
    }

    &__author {
      display: flex;
      flex-direction: column;

      &-name {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -1%;

        @media (min-width: $breakpoint-sm) {
          font-size: 20px;
        }

        @media (min-width: $breakpoint-md) {
          font-size: 24px;
        }

        @media (min-width: $breakpoint-lg) {
          font-size: 36px;
        }
      }

      &-nickname {
        color: var(--text-color-secondary);
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
  }
</style>
