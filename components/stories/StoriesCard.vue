<template>
  <div :id="`story-${props.story.id}`" class="stories-card">
    <div class="stories-card__content" aria-label="Сравнение точек А и B">
      <div class="stories-card__content-description">
        <span class="stories-card__content-heading">Точка А:</span>
        <p class="stories-card__content-text">{{ props.story.first }}</p>
      </div>

      <div class="stories-card__content-description">
        <span class="stories-card__content-heading">Точка B:</span>
        <p class="stories-card__content-text">{{ props.story.second }}</p>
      </div>
    </div>

    <div class="stories-card__author">
      <span class="stories-card__author-name">
        {{ props.story.name }}
      </span>
      <span class="stories-card__author-age">
        {{ props.story.age }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

interface StoriesCard {
  id: number;
  first: string;
  second: string;
  name: string;
  age: string;
}

const props = defineProps<{
  story: StoriesCard;
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
      color: #F4F4F4B2;
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
