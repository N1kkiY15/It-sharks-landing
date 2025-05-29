<template>
  <div :id="`story-${cardIndex}`" class="stories-card">
    <StoriesCardDescription :startText=props.card.first :endText=props.card.second />
    <div class="stories-card__author">
      <span class="stories-card__author-name">
        {{ props.card.name }}
      </span>
      <span class="stories-card__author-age">
        {{ props.card.age }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

import StoriesCardDescription from "@components/stories/StoriesCardDescription.vue";

interface Card {
  first: string;
  second: string;
  name: string;
  age: string;
}

const props = defineProps<{
  card: Card;
  cardIndex: number;
}>();

</script>

<style scoped lang="scss">
.stories-card {
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: auto;
  gap: 15px;
  max-width: 230px;

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
    margin-top: auto;


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

    &-age {
      color: #F4F4F4B2;;
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
