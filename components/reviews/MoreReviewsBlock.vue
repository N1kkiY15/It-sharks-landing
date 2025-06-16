<template>
  <div class="more-reviews">
    <div aria-label="Больше отзывов" class="more-reviews__button--block">
      <p class="more-reviews__text">Больше отзывов</p>
      <RightArrowS />
    </div>

    <ButtonComponent
      aria-label="Ссылка на канал с отзывами"
      variant="primary"
      class="more-reviews__button"
      tag="a"
      href="https://t.me/it_mentors"
    >
      <p class="more-reviews__text">@it_mentors</p>
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
      font-weight: 400;
      font-size: 12px;

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

      @media (min-width: $breakpoint-sm) {
        gap: 10px;
        padding: 8px 12px;
      }
      @media (min-width: $breakpoint-md) {
        padding: 12px 18px;
      }

      &--block {
        display: flex;
        gap: 6px;
        align-items: center;
        color: var(--text-color);
        padding: 7px 15px;
        border-radius: 500px;
        background-color: var(--el-bg-color);

        :deep(.icon-path) {
          fill: var(--text-color);
        }
      }
    }
  }
</style>