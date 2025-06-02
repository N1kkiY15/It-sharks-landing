<template>
  <div class="read-more">
    <p class="read-more__text">читать дальше</p>
    <ButtonComponent variant="secondary" class="read-more__arrow">
      <DoubleArrow class="read-more__arrow--double"/>
    </ButtonComponent>
  </div>
</template>

<script setup lang="ts">
  import DoubleArrow from '@assets/svg/arrows/DoubleArrow.vue'
</script>

<style scoped lang="scss">
  .read-more {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    &__text {
      color: var(--text-color);
      font-weight: 400;
      font-size: 12px;
      letter-spacing: -1%;
      max-width: 53px;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: 76px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
      }
    }

    &__arrow {
      width: 40px;
      height: 40px;

      @media (min-width: $breakpoint-md) {
        width: 60px;
        height: 60px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 100px;
        height: 100px;
      }

      &--double {
        height: 12px;
        width: 12px;

        @media (min-width: $breakpoint-md) {
          height: 17px;
          width: 17px;
        }

        @media (min-width: $breakpoint-lg) {
          height: 27px;
          width: 27px;
        }
      }
    }
  }

</style>