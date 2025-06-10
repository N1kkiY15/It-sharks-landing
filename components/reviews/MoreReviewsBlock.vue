<template>
  <div class="more-reviews">
    <ButtonComponent aria-label="Больше отзывов" variant="primary" class="more-reviews__button">
      <p class="more-reviews__text">Больше отзывов</p>
      <RightArrowS />
    </ButtonComponent>

    <ButtonComponent
      aria-label="Ссылка на канал с отзывами"
      variant="primary"
      class="more-reviews__button"
    >
      <p class="more-reviews__text more-reviews__text--link">@it_mentors</p>
    </ButtonComponent>
  </div>
</template>

<script setup>
  import RightArrowS from '@assets/svg/arrows/RightArrowS.vue'
</script>

<style lang="scss" scoped>
  .more-reviews {
    display: flex;
    flex-direction: row;
    gap: 10px;

    &__text {
      color: var(--text-color);
      font-weight: 400;
      font-size: 12px;

      &--link {
        color: var(--accent-color);
      }

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
      gap: 6px;
      align-items: center;
      font-family: 'Clash Display', arial, sans-serif;
      padding: 5px 10px;
      cursor: initial;

      @media (min-width: $breakpoint-sm) {
        gap: 10px;
        padding: 8px 12px;
      }
      @media (min-width: $breakpoint-md) {
        padding: 12px 18px;
      }
    }
  }
</style>
